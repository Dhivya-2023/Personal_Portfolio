import { Layout } from '@/components/layout/Layout';
import { FadeIn } from '@/components/AnimatedText';
import { Calendar, Clock, Video, CheckCircle } from 'lucide-react';

const BookMeeting = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Content */}
            <div>
              <FadeIn>
                <span className="text-sm font-medium text-primary mb-4 block">Let's Connect</span>
                <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
                  Book a Meeting<span className="text-primary">.</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Schedule a call to discuss your project, explore collaboration opportunities, 
                  or just have a chat about frontend development.
                </p>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Video className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Video Call</h3>
                      <p className="text-muted-foreground text-sm">
                        30-minute video call via Google Meet or Zoom
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Flexible Scheduling</h3>
                      <p className="text-muted-foreground text-sm">
                        Choose a time that works best for you
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Confirmation Email</h3>
                      <p className="text-muted-foreground text-sm">
                        Receive calendar invite and meeting details via email
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* What to Expect */}
              <FadeIn delay={0.2}>
                <div className="mt-10 p-6 bg-secondary rounded-2xl">
                  <h3 className="font-semibold mb-4">What to expect:</h3>
                  <ul className="space-y-3">
                    {[
                      'Discuss your project requirements and goals',
                      'Explore technical solutions and approaches',
                      'Review my experience and portfolio',
                      'Talk about timeline and collaboration',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.3}>
  <div className="bg-card rounded-2xl border border-border overflow-hidden">
    <div className="p-6 border-b border-border">
      <div className="flex items-center gap-3">
        <Calendar className="w-5 h-5 text-primary" />
        <span className="font-semibold">Book a Meeting</span>
      </div>
    </div>

    {/* Google Form Embed */}
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSePDpDVcI_pa93P2zofZzOj_1E7Fv-sjRObgA5dUMascNMN0w/viewform?usp=header"
      className="w-full min-h-[650px]"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
    >
      Loading…
    </iframe>
  </div>
</FadeIn>

          </div>
        </div>
      </section>

      {/* Thank You Message */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Looking forward to connecting<span className="text-primary">!</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              After you book a meeting, you'll receive a confirmation email with all the details 
              and a calendar invite. See you soon!
            </p>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default BookMeeting;
