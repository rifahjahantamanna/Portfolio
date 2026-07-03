import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { profile } from "../data/profile";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto scroll-mt-20">
      <Reveal>
        <h2 className="font-display text-3xl font-700 mb-2">Get In Touch</h2>
        <div className="w-16 h-1 bg-accent rounded-full mb-10" />

        <p className="text-muted mb-10 max-w-md">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-6">
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-4 p-5 rounded-xl border border-ink/10 hover:border-accent transition-colors"
        >
          <HiOutlineMail className="text-2xl text-accent" />
          <div>
            <p className="text-sm text-muted">Email</p>
            <p className="font-medium">{profile.email}</p>
          </div>
        </a>

        <a
          href={`tel:${profile.phone}`}
          className="flex items-center gap-4 p-5 rounded-xl border border-ink/10 hover:border-accent transition-colors"
        >
          <HiOutlinePhone className="text-2xl text-accent" />
          <div>
            <p className="text-sm text-muted">Phone</p>
            <p className="font-medium">{profile.phone}</p>
          </div>
        </a>

        {profile.whatsapp && (
          <a
            href={`https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 p-5 rounded-xl border border-ink/10 hover:border-accent transition-colors"
          >
            <FaWhatsapp className="text-2xl text-accent" />
            <div>
              <p className="text-sm text-muted">WhatsApp</p>
              <p className="font-medium">{profile.whatsapp}</p>
            </div>
          </a>
        )}

        <div className="flex items-center gap-4 p-5 rounded-xl border border-ink/10">
          <HiOutlineLocationMarker className="text-2xl text-accent" />
          <div>
            <p className="text-sm text-muted">Location</p>
            <p className="font-medium">{profile.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
