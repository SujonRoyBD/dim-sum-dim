"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Facebook, Linkedin, X } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const { mutate, isPending } = useMutation({
    mutationKey: ["contact-form"],
    mutationFn: (data: typeof formData) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data?.status) {
        toast.error("Something went wrong", {
          description: data.message,
        });
        return;
      }

      toast.success("Contact message submitted successfully", {
        description: data.message,
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    mutate(formData);
  };

  return (
    <Card className="w-full container mx-auto rounded-xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative p-8 md:p-12 flex flex-col justify-center items-start text-white">
          <Image
            src="/assets/contactFrom.png"
            alt="Background image of food"
            fill
            className="absolute inset-0 object-cover blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 w-full">
            <h2 className="text-3xl font-bold mb-2">Just Say Hi !</h2>
            <p className="text-sm mb-8">
              Tell us more about you and well contact you soon.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name">Name</label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-transparent px-0 pb-2 pt-6 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-transparent px-0 pb-2 pt-6 text-white"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <Input
                  id="phoneNumber"
                  type="text"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="bg-transparent px-0 pb-2 pt-6 text-white"
                />
              </div>
              <div>
                <label htmlFor="message">Type your message here</label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-transparent px-0 pb-2 pt-6 text-white"
                />
              </div>
              <div className="flex justify-end">
                <Button
                  disabled={isPending}
                  type="submit"
                  className="bg-red-700 hover:bg-red-800 text-white py-3 text-lg"
                >
                  {isPending ? "Submitting..." : "Submit"}{" "}
                  <span className="ml-2">&rarr;</span>
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Section: Contact Information */}
        <div className="relative p-8 md:p-12 bg-[#FCE8E8] flex flex-col justify-between text-gray-800">
          <Image
            src="/assets/contactusFrom2.png"
            alt="Cherry blossom tree illustration"
            fill
            className="absolute inset-0 object-contain object-bottom opacity-50"
          />
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <p className="text-sm mb-2">Maui, Hawaii, USA</p>
            <p className="text-sm mb-2">Call us: +1234567890</p>
            <p className="text-sm mb-8">Whatsapp: +1234567890</p>

            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-800 hover:text-gray-600"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-800 hover:text-gray-600"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="X (formerly Twitter)"
                className="text-gray-800 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="relative z-10 text-right mt-8">
            <p className="text-4xl font-serif italic text-gray-600">
              Contact Us
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
