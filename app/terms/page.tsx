import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions for booking Friday Coffee Co. mobile coffee catering services.",
};

export default function TermsPage() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <h1 className="text-4xl lg:text-5xl text-navy mb-3">Terms &amp; Conditions</h1>
        <p className="text-sm text-muted mb-10">Last updated: June 2026</p>

        <div className="space-y-8 text-muted leading-relaxed [&_h2]:text-navy [&_h2]:text-2xl [&_h2]:mb-3 [&_p]:mb-3">
          <div>
            <h2>Booking &amp; Deposits</h2>
            <p>
              A deposit is required to reserve your event date. Your date is not
              confirmed until the deposit is received. Deposit amounts and payment
              terms are outlined in your quote.
            </p>
          </div>
          <div>
            <h2>Cancellations &amp; Rescheduling</h2>
            <p>
              If you need to cancel or reschedule, please contact us as early as
              possible. Cancellation and rescheduling terms are detailed in your
              booking agreement.
            </p>
          </div>
          <div>
            <h2>Service Requirements</h2>
            <p>
              We require access to a standard power outlet and roughly 6×6 feet of
              space for the cart. For outdoor events, a covered area is preferred.
              Final headcount and event details should be confirmed in advance.
            </p>
          </div>
          <div>
            <h2>Liability</h2>
            <p>
              Friday Coffee Co. carries appropriate insurance for our catering
              services. We are not responsible for circumstances outside our
              control, including venue restrictions or weather affecting outdoor
              events.
            </p>
          </div>
          <div>
            <h2>Contact</h2>
            <p>
              Questions about these terms? Email{" "}
              <a href="mailto:fridaycoffee.co@gmail.com" className="text-cobalt hover:underline">
                fridaycoffee.co@gmail.com
              </a>{" "}
              or call (214) 326-0622.
            </p>
          </div>

          <p className="text-sm italic">
            This is a general template and should be reviewed by a qualified
            professional before launch to ensure it reflects your actual booking
            policies and legal obligations.
          </p>
        </div>
      </div>
    </section>
  );
}
