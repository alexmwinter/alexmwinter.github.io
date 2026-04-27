import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PrimaryButton } from "@/components/ui/design-system";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");
    setIsError(false);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "ad1d16af-3608-4ce0-9cc3-47714d927905");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      
      if (data.success) {
        setResult("Message sent successfully!");
        setIsError(false);
        (event.target as HTMLFormElement).reset();
      } else {
        setResult("Error sending message.");
        setIsError(true);
      }
    } catch (error) {
      setResult("Error sending message.");
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-6 py-12">
      <div className="w-full max-w-xl">
        <h1 className="text-[36px] font-bold font-sans mb-8 text-black dark:text-white">
          Contact
        </h1>
        
        <Card className="bg-card border-border shadow-none rounded-xl overflow-hidden">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold font-sans">Get in touch</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="space-y-2">
                <label 
                  htmlFor="name" 
                  className="text-sm font-medium font-sans text-mid-gray uppercase tracking-wider"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-input border-input focus:ring-bright-blue h-12 rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <label 
                  htmlFor="email" 
                  className="text-sm font-medium font-sans text-mid-gray uppercase tracking-wider"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="bg-input border-input focus:ring-bright-blue h-12 rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <label 
                  htmlFor="message" 
                  className="text-sm font-medium font-sans text-mid-gray uppercase tracking-wider"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can I help you?"
                  required
                  className="bg-input border-input focus:ring-bright-blue min-h-[150px] rounded-lg"
                />
              </div>

              <PrimaryButton 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-12 text-base font-bold"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </PrimaryButton>

              {result && (
                <div 
                  className={cn(
                    "text-center font-medium font-sans mt-4 transition-all animate-in fade-in slide-in-from-top-2",
                    isError ? "text-red-500" : "text-bright-blue"
                  )}
                >
                  {result}
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
