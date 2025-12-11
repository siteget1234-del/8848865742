// Mock data for Respiratory Medical Clinic

export const clinicData = {
  name: {
    english: "Respiratory Medical Clinic",
    malayalam: "റെസ്പിറേറ്ററി മെഡിക്കൽ ക്ലിനിക്"
  },
  doctor: {
    name: "Dr. Smitha Nair",
    qualification: "PG",
    designation: "Respiratory Medicine Consultant",
    workplace: "Government Tata Memorial Hospital",
    bio: "Dr. Smitha Nair is a highly qualified respiratory medicine consultant with extensive experience in treating various respiratory conditions. She provides personalized care and evidence-based treatment for all respiratory ailments."
  },
  schedule: [
    { day: "Thursday", time: "2:00 PM - 5:00 PM", available: true },
    { day: "Friday", time: "Closed", available: false },
    { day: "Saturday", time: "Closed", available: false },
    { day: "Sunday", time: "9:00 AM - 1:30 PM", available: true },
    { day: "Monday", time: "Closed", available: false },
    { day: "Tuesday", time: "Closed", available: false },
    { day: "Wednesday", time: "Closed", available: false }
  ],
  contact: {
    phone: "+91 8848865742",
    whatsapp: "+918848865742",
    address: {
      line1: "Nellimoodu, Poovar - Vizhinjam Rd",
      line2: "Near Government Hospital",
      city: "Poovar",
      state: "Kerala",
      pincode: "695525",
      landmark: "83C8+PC Poovar, Kerala"
    }
  },
  info: "This is a private medical consultation for respiratory medical illness, provided by Dr Smitha Nair PG, who is a respiratory medicine consultant at Government Tata Memorial Hospital. Please call/WhatsApp the number provided for appointments.",
  services: [
    {
      title: "Asthma Management",
      description: "Comprehensive diagnosis and treatment plans for asthma patients of all ages."
    },
    {
      title: "COPD Treatment",
      description: "Expert care for Chronic Obstructive Pulmonary Disease with personalized therapy."
    },
    {
      title: "Respiratory Infections",
      description: "Treatment for pneumonia, bronchitis, and other respiratory infections."
    },
    {
      title: "Sleep Disorders",
      description: "Diagnosis and management of sleep apnea and related breathing disorders."
    },
    {
      title: "Allergy Testing",
      description: "Comprehensive allergy evaluation and immunotherapy recommendations."
    },
    {
      title: "Lung Function Tests",
      description: "Advanced spirometry and pulmonary function testing services."
    }
  ]
};

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    condition: "Asthma Patient",
    text: "Dr. Smitha's treatment has significantly improved my breathing. Highly professional and caring.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Menon",
    condition: "COPD Treatment",
    text: "Excellent consultation and follow-up care. My father's condition has improved remarkably.",
    rating: 5
  }
];
