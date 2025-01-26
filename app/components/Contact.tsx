"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from "react-toastify";
export default function Contact() {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [help, setHelp] = React.useState("");
  const [isSending, setIsSending] = React.useState(false);
  
  const handleSubmit = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsSending(true);
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
try{
    const emailParams = {
      name: name,
      email: email,
      message: message,
      help:help
    };
    const res = await emailjs.send(serviceID!, templateID!,
       emailParams, userID!);

    if (res.status === 200) {
      toast.success("Message sent successfully!");
      setEmail("");
      setName("");
      setMessage("");
      setHelp("");
      setIsSending(false);
    }
  } catch (error) {
    console.log(error);
    toast.error("Failed to send message. Please try again later.");
    setIsSending(false);
  }
  };

  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-4">
        <ToastContainer/>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-4xl font-bold"
        >
          Get In Touch
        </motion.h2>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6">
              <h3 className="mb-6 text-2xl font-semibold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <p>avijitbera775@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <p>+91 (629) 668-4980</p>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <p>Debra, West Bengal</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6">
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">Name</label>
                    <Input value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Email</label>
                    <Input value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Subject</label>
                  <Input value={help}
                  onChange={(e) => setHelp(e.target.value)}
                  placeholder="How can I help you?" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Message</label>
                  <Textarea value={message}
                  onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message here..."
                    className="min-h-[150px]"
                  />
                </div>
                <motion.button
                disabled={(!email || !name || !message) && isSending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => handleSubmit(e)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </motion.button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}