// Global Configuration - All environment variables centralized
export const config = {
  // WhatsApp Configuration
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999",
    getLink: (message?: string) => {
      const baseUrl = `https://wa.me/${config.whatsapp.number}`;
      return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
    },
  },

  // Google Sheets Configuration
  sheets: {
    id: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID || "",
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "",
    getSheetUrl: (sheetName: string) => {
      const baseUrl = `https://sheets.googleapis.com/v4/spreadsheets/${config.sheets.id}/values/${sheetName}`;
      return `${baseUrl}?key=${config.sheets.apiKey}`;
    },
  },

  // Company Info
  company: {
    name: "GRAPH MEDIA",
    tagline: "Crafting Premium Brand Experiences",
    description:
      "GRAPH MEDIA transforms businesses through luxury branding, creative design, premium printing, and modern digital experiences.",
  },
};

// WhatsApp message templates
export const whatsappMessages = {
  general: "Hello! I'm interested in your branding services.",
  portfolio: (projectName: string, category: string) =>
    `Hello! I'm interested in a project similar to "${projectName}" from your ${category} portfolio. Can we discuss?`,
  service: (serviceName: string) =>
    `Hello! I'm interested in your ${serviceName} services. Can we discuss my project requirements?`,
  startBrand: "Hello! I want to start building my brand with GRAPH MEDIA. Let's discuss!",
};
