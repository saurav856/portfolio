import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Turning Concepts into Experiences
            </h3>

            <p className="text-muted-foreground">
              For me, coding is more than just writing lines of code — it’s about crafting experiences that feel smooth, engaging, and enjoyable to use. I enjoy blending creativity with problem-solving, turning designs into interactive interfaces that people can connect with.

            </p>

            <p className="text-muted-foreground">
              I’m always curious about new tools, trends, and design patterns, and I see every project as a chance to learn and grow. Whether it’s experimenting with animations, fine-tuning layouts for responsiveness, or adding little touches that make a website memorable, I find joy in the details.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a  target="_blank" href="https://www.linkedin.com/in/iamsauravgc/" className="cosmic-button">
                {" "}
                LinkedIn
              </a>

              <a 
                target="_blank"
                href="https://mail.google.com/sauravgc33@gmail.com"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Mail
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
