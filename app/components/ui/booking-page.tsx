"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";

const TIME_SLOTS = [
  "9:00 AM", "10:00 AM", "11:00 AM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Calendar({
  selected,
  onSelect,
}: {
  selected: Date | null;
  onSelect: (d: Date) => void;
}) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const monthLabel = new Date(viewYear, viewMonth).toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const days = useMemo(() => {
    const first = new Date(viewYear, viewMonth, 1).getDay();
    const total = new Date(viewYear, viewMonth + 1, 0).getDate();
    return { first, total };
  }, [viewYear, viewMonth]);

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  }

  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  }

  function isDisabled(day: number) {
    const d = new Date(viewYear, viewMonth, day);
    d.setHours(0, 0, 0, 0);
    return d <= today;
  }

  function isSelected(day: number) {
    if (!selected) return false;
    return (
      selected.getDate() === day &&
      selected.getMonth() === viewMonth &&
      selected.getFullYear() === viewYear
    );
  }

  return (
    <div className="bg-[#1E1E1E] border border-[#2C2C2C] p-6">
      <div className="flex items-center justify-between mb-6">
        <button
          type="button"
          onClick={prevMonth}
          className="p-1.5 text-[#9B9B9B] hover:text-white transition-colors"
          aria-label="Previous month"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="text-sm font-semibold text-white">{monthLabel}</span>
        <button
          type="button"
          onClick={nextMonth}
          className="p-1.5 text-[#9B9B9B] hover:text-white transition-colors"
          aria-label="Next month"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-7 mb-2">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-[10px] font-semibold uppercase tracking-wider text-[#9B9B9B] py-1">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-1">
        {Array.from({ length: days.first }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {Array.from({ length: days.total }).map((_, i) => {
          const day = i + 1;
          const disabled = isDisabled(day);
          const sel = isSelected(day);
          return (
            <button
              key={day}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(new Date(viewYear, viewMonth, day))}
              className={`
                h-9 w-full text-sm font-medium transition-all duration-150 rounded-[5px]
                ${sel
                  ? "bg-[#E05A3A] text-white"
                  : disabled
                  ? "text-[#3C3C3C] cursor-not-allowed"
                  : "text-[#9B9B9B] hover:bg-[#2C2C2C] hover:text-white cursor-pointer"
                }
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface FormState {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
}

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function isValidPhone(v: string) {
  return v.replace(/\D/g, "").length >= 10;
}

export interface BookingPageProps {
  eyebrow: string;
  heading: string;
  subheading: string;
  successHeading: string;
  successBody: string;
}

export default function BookingPage({
  eyebrow,
  heading,
  subheading,
  successHeading,
  successBody,
}: BookingPageProps) {
  const [form, setForm] = useState<FormState>({
    firstName: "", lastName: "", company: "", email: "", phone: "",
  });
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof FormState, value: string) {
    setForm(f => ({ ...f, [field]: value }));
  }

  function handleBlur(field: keyof FormState) {
    setTouched(t => ({ ...t, [field]: true }));
  }

  const errors: Partial<Record<keyof FormState, string>> = {
    firstName: form.firstName.trim() ? undefined : "Required",
    lastName: form.lastName.trim() ? undefined : "Required",
    company: form.company.trim() ? undefined : "Required",
    email: !form.email.trim() ? "Required" : !isValidEmail(form.email) ? "Invalid email" : undefined,
    phone: !form.phone.trim() ? "Required" : !isValidPhone(form.phone) ? "Min 10 digits" : undefined,
  };

  const formValid = Object.values(errors).every(e => !e);
  const canSubmit = formValid && !!selectedDate && !!selectedTime;

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched({ firstName: true, lastName: true, company: true, email: true, phone: true });
    if (!canSubmit) return;
    setSubmitted(true);
  }

  const dateLabel = selectedDate
    ? selectedDate.toLocaleDateString("default", { weekday: "long", month: "long", day: "numeric", year: "numeric" })
    : null;

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#111111] flex flex-col items-center justify-center px-6 text-center">
        <div className="w-16 h-16 rounded-full bg-[#E05A3A]/10 border border-[#E05A3A]/30 flex items-center justify-center mb-6">
          <svg className="w-7 h-7 text-[#E05A3A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-white mb-3">{successHeading}</h1>
        <p className="text-[#9B9B9B] mb-2">{dateLabel} at {selectedTime}</p>
        <p className="text-[#9B9B9B] text-sm mb-8">
          {successBody} <span className="text-white">{form.email}</span>.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#E05A3A] hover:text-[#c94e30] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111111]">
      {/* Top bar */}
      <div className="border-b border-[#2C2C2C]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/EAS.png" alt="EADES" className="w-7 h-7 object-contain" />
            <span className="text-base font-bold text-white tracking-tight">EADES</span>
          </Link>
          <Link href="/" className="flex items-center gap-1.5 text-sm text-[#9B9B9B] hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
        </div>
      </div>

      {/* Page header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#E05A3A] mb-4 block">
          {eyebrow}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          {heading}
        </h1>
        <p className="mt-3 text-[#9B9B9B] max-w-lg leading-relaxed">
          {subheading}
        </p>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Left — form */}
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="First Name"
                  value={form.firstName}
                  error={touched.firstName ? errors.firstName : undefined}
                  onChange={v => handleChange("firstName", v)}
                  onBlur={() => handleBlur("firstName")}
                  placeholder="Jane"
                />
                <Field
                  label="Last Name"
                  value={form.lastName}
                  error={touched.lastName ? errors.lastName : undefined}
                  onChange={v => handleChange("lastName", v)}
                  onBlur={() => handleBlur("lastName")}
                  placeholder="Smith"
                />
              </div>
              <Field
                label="Company"
                value={form.company}
                error={touched.company ? errors.company : undefined}
                onChange={v => handleChange("company", v)}
                onBlur={() => handleBlur("company")}
                placeholder="Acme Inc."
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                error={touched.email ? errors.email : undefined}
                onChange={v => handleChange("email", v)}
                onBlur={() => handleBlur("email")}
                placeholder="jane@acme.com"
              />
              <Field
                label="Phone Number"
                type="tel"
                value={form.phone}
                error={touched.phone ? errors.phone : undefined}
                onChange={v => handleChange("phone", v)}
                onBlur={() => handleBlur("phone")}
                placeholder="+1 (555) 000-0000"
              />

              {(selectedDate || selectedTime) && (
                <div className="border border-[#2C2C2C] bg-[#1E1E1E] p-4 text-sm">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#E05A3A] mb-2">
                    Your Booking
                  </p>
                  {selectedDate && <p className="text-white">{dateLabel}</p>}
                  {selectedTime && <p className="text-[#9B9B9B]">{selectedTime}</p>}
                </div>
              )}

              <button
                type="submit"
                disabled={!canSubmit}
                className={`
                  mt-2 h-12 px-8 text-sm font-semibold transition-all duration-200 rounded-[5px]
                  ${canSubmit
                    ? "bg-[#E05A3A] text-white hover:bg-[#c94e30] cursor-pointer"
                    : "bg-[#2C2C2C] text-[#555555] cursor-not-allowed"
                  }
                `}
              >
                {canSubmit ? "Confirm Booking" : "Complete form & select a time"}
              </button>
            </div>

            {/* Right — calendar + times */}
            <div className="flex flex-col gap-4">
              <Calendar
                selected={selectedDate}
                onSelect={(d) => { setSelectedDate(d); setSelectedTime(null); }}
              />

              {selectedDate && (
                <div className="bg-[#1E1E1E] border border-[#2C2C2C] p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#9B9B9B] mb-4">
                    Available Times
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`
                          h-10 text-sm font-medium transition-all duration-150 border rounded-[5px]
                          ${selectedTime === slot
                            ? "bg-[#E05A3A] border-[#E05A3A] text-white"
                            : "border-[#2C2C2C] text-[#9B9B9B] hover:border-[#E05A3A]/50 hover:text-white"
                          }
                        `}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  error,
  onChange,
  onBlur,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-widest text-[#9B9B9B]">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`
          h-11 bg-[#1E1E1E] border px-4 text-sm text-white placeholder-[#555555]
          outline-none transition-colors duration-150
          focus:border-[#E05A3A]/60
          ${error ? "border-red-500/60" : "border-[#2C2C2C]"}
        `}
      />
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
