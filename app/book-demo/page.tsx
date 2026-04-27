import BookingPage from "@/app/components/ui/booking-page";

export default function BookDemoPage() {
  return (
    <BookingPage
      eyebrow="Book a Demo"
      heading="Schedule a Free Demo"
      subheading="Tell us a little about yourself, then pick a time that works for you. No commitment — just a conversation."
      successHeading="You're booked!"
      successBody="We'll send a confirmation to"
    />
  );
}
