import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, Video, Phone, MapPin, ArrowRight } from 'lucide-react';
import { analytics } from '../utils/analytics';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState('Tomorrow, 10:30 AM');
  const [meetingType, setMeetingType] = useState<'video' | 'phone' | 'onsite'>('video');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [projectTopic, setProjectTopic] = useState('Hospitality / Restaurant Interior');
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    analytics.track('calendly_consultation_booked', 'conversion', meetingType, {
      name: clientName,
      email: clientEmail,
      topic: projectTopic,
      slot: selectedDate
    });
    setBooked(true);
  };

  const timeSlots = [
    'Tomorrow, 10:30 AM',
    'Tomorrow, 2:00 PM',
    'Thursday, 11:00 AM',
    'Thursday, 3:30 PM',
    'Friday, 1:00 PM'
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1C1B1A]/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-dialog-title"
    >
      <div className="bg-[#FAF8F5] max-w-xl w-full border border-[#1C1B1A]/15 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#8C827A] hover:text-[#1C1B1A] focus-ring"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-[#1C1B1A]/10 bg-white">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-[#1C1B1A] text-[#FAF8F5] flex items-center justify-center font-serif text-lg">
              ZG
            </div>
            <div>
              <h2 id="booking-dialog-title" className="font-serif text-2xl text-[#1C1B1A]">
                Schedule a Consultation
              </h2>
              <p className="text-xs text-[#8C827A]">
                Direct 30-minute design feasibility session with Zoe Nicola Greenwood
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          {!booked ? (
            <form onSubmit={handleBook} className="space-y-5">
              {/* Meeting format selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#1C1B1A] mb-2">
                  Preferred Format
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setMeetingType('video')}
                    className={`py-2 px-3 text-xs border flex items-center justify-center gap-1.5 transition-colors ${
                      meetingType === 'video'
                        ? 'bg-[#1C1B1A] text-[#FAF8F5] border-[#1C1B1A]'
                        : 'bg-white text-[#1C1B1A] border-[#1C1B1A]/20 hover:border-[#1C1B1A]'
                    }`}
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Video Call</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMeetingType('phone')}
                    className={`py-2 px-3 text-xs border flex items-center justify-center gap-1.5 transition-colors ${
                      meetingType === 'phone'
                        ? 'bg-[#1C1B1A] text-[#FAF8F5] border-[#1C1B1A]'
                        : 'bg-white text-[#1C1B1A] border-[#1C1B1A]/20 hover:border-[#1C1B1A]'
                    }`}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Phone</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMeetingType('onsite')}
                    className={`py-2 px-3 text-xs border flex items-center justify-center gap-1.5 transition-colors ${
                      meetingType === 'onsite'
                        ? 'bg-[#1C1B1A] text-[#FAF8F5] border-[#1C1B1A]'
                        : 'bg-white text-[#1C1B1A] border-[#1C1B1A]/20 hover:border-[#1C1B1A]'
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Preston / Site</span>
                  </button>
                </div>
              </div>

              {/* Slot selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#1C1B1A] mb-2">
                  Available Calendar Slots
                </label>
                <div className="space-y-1.5">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedDate(slot)}
                      className={`w-full text-left px-3.5 py-2 text-xs border flex items-center justify-between transition-colors ${
                        selectedDate === slot
                          ? 'border-[#B39266] bg-[#B39266]/10 font-semibold text-[#1C1B1A]'
                          : 'border-[#1C1B1A]/10 bg-white hover:border-[#1C1B1A]/30 text-[#8C827A]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-[#B39266]" />
                        <span>{slot}</span>
                      </span>
                      <span className="text-[11px] text-[#8C827A]">GMT (UK)</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Topic */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#1C1B1A] mb-1">
                  Project Focus
                </label>
                <select
                  value={projectTopic}
                  onChange={(e) => setProjectTopic(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#1C1B1A]/15 text-xs focus:border-[#B39266] focus-ring"
                >
                  <option>Hospitality / Restaurant Interior</option>
                  <option>Commercial Kitchen & Bar Specification</option>
                  <option>Pub / Bistro Refurbishment</option>
                  <option>CAD Planning & Building Regulations</option>
                  <option>Luxury High-End Residential</option>
                </select>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#1C1B1A] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#1C1B1A]/15 text-xs focus:border-[#B39266] focus-ring"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#1C1B1A] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@venue.co.uk"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#1C1B1A]/15 text-xs focus:border-[#B39266] focus-ring"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#1C1B1A] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+44 7..."
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#1C1B1A]/15 text-xs focus:border-[#B39266] focus-ring"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#1C1B1A] hover:bg-[#343230] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.2em] transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Confirm Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B39266]" />
              </button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#606D5E]/20 text-[#606D5E] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#1C1B1A]">Consultation Confirmed</h3>
              <p className="text-xs text-[#8C827A] max-w-sm mx-auto">
                Thank you, {clientName}. Zoe Nicola Greenwood looks forward to speaking with you on <strong>{selectedDate}</strong> via {meetingType}.
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-6 py-2 border border-[#1C1B1A]/20 text-xs font-semibold uppercase tracking-wider hover:bg-[#1C1B1A] hover:text-white transition-colors"
                >
                  Return to Website
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
