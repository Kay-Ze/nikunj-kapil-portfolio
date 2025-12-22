import { useState } from "react"; // ADDED
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from "lucide-react"; // ADDED CheckCircle

// --- 1. NEW TOAST COMPONENT ---
// You can keep this in the same file
const Toast = ({ message, show }) => {
  if (!show) return null;

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
      <div className="flex animate-fade-in-out items-center gap-3 rounded-lg border border-green-500 bg-neutral-800 px-6 py-3 text-white shadow-lg">
        <CheckCircle className="h-5 w-5 text-green-500" />
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
};

// --- 2. YOUR COMPONENT (with modifications) ---
const ContactSection = () => {
  // FormSubmit.co handles the submission directly // <- This comment is no longer fully true
  const [showToast, setShowToast] = useState(false); // ADDED

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nikunjkapil279@gmail.com",
      link: "mailto:nikunjkapil279@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9690398773",
      link: "tel:+919690398773"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available for Remote Work",
      link: null
    }
  ];

  // --- 3. NEW SUBMIT HANDLER FUNCTION ---
  const handleSubmit = async (event) => {
    event.preventDefault(); // Stop the browser from redirecting
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/nikunjkapil279@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json' // Tells FormSubmit to send back JSON
        }
      });

      if (response.ok) {
        setShowToast(true);  // Show the toast
        form.reset(); // Clear the form fields
        
        // Hide the toast after 3 seconds
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
        
      } else {
        // Handle errors (you could show an error toast here)
        console.error("Form submission error.");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };


  return (
    // --- 4. ADDED 'relative' CLASS ---
    <section id="contact" className="py-20 gradient-subtle relative">
      
      {/* --- 5. ADDED TOAST COMPONENT --- */}
      <Toast message="Message sent successfully!" show={showToast} />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's connect and discuss how we can create something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 shadow-elegant border-border/50 animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold">Send a Message</h3>
            </div>
            
            {/* --- 6. MODIFIED <form> TAG --- */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  className="border-border focus:border-primary transition-smooth"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="border-border focus:border-primary transition-smooth"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Send A Message Here..."
                  rows={5}
                  className="border-border focus:border-primary transition-smooth resize-none"
                  required
                />
              </div>
              
              {/* FormSubmit.co Configuration */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
              <input type="hidden" name="_template" value="table" />
              
              <Button  
                type="submit"
                size="lg"
                className="w-full bg-gradient-primary hover:shadow-glow transition-smooth"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
          
          {/* Contact Info (No changes below this line) */}
          <div className="space-y-8 animate-slide-up">
            <Card className="p-8 shadow-elegant border-border/50">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-smooth">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{info.label}</h4>
                      {info.link ? (
                        <a  
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-smooth"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-8 shadow-elegant border-border/50">
              <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
              <div className="flex gap-4">
                <a  
                  href="https://github.com/Kay-Ze"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary hover:shadow-accent transition-smooth group"
                >
                  <Github className="w-6 h-6 group-hover:text-primary transition-smooth" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a  
                  href="https://linkedin.com/nikunj-kapil-23972a2bb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary hover:shadow-accent transition-smooth group"
                >
                  <Linkedin className="w-6 h-6 group-hover:text-primary transition-smooth" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
