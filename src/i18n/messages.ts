import type { PartialDeep } from './deepMerge'

export type AiventMessages = {
  header: {
    ctaLabel: string
    openMenuAriaLabel: string
    menuTitle: string
    closeMenuAriaLabel: string
    nav: {
      home: string
      about: string
      speakers: string
      schedule: string
      tickets: string
      news: string
      contact: string
    }
  }
  footer: {
    brand: string
    description: string
    columns: { event: string; resources: string }
    links: {
      about: string
      speakers: string
      schedule: string
      tickets: string
      news: string
      contact: string
    }
    rights: string
    builtWith: string
  }
  hero: {
    badge: string
    primaryCta: string
    secondaryCta: string
  }
  sections: {
    whyAttend: { eyebrow: string; title: string }
    speakers: { eyebrow: string; title: string }
    schedule: { eyebrow: string; title: string }
    tickets: {
      eyebrow: string
      title: string
      subtitle: string
      popular: string
      buyPrefix: string
      style2Title: string
      style2Subtitle: string
      select: string
      cart: string
      vat: string
      total: string
      checkout: string
    }
    news: { eyebrow: string; title: string }
    contact: { eyebrow: string; title: string; intro: string }
  }
  contactForm: {
    fields: { name: string; email: string; message: string }
    placeholders: { name: string; email: string; message: string }
    errors: { nameRequired: string; emailRequired: string; emailInvalid: string; messageRequired: string }
    submit: { sending: string; send: string }
    helper: string
  }
  contactInfo: {
    locationLabel: string
    emailLabel: string
    phoneLabel: string
  }
}

export const enMessages: AiventMessages = {
  header: {
    ctaLabel: 'Get Tickets',
    openMenuAriaLabel: 'Open menu',
    menuTitle: 'MENU',
    closeMenuAriaLabel: 'Close menu',
    nav: {
      home: 'Home',
      about: 'About',
      speakers: 'Speakers',
      schedule: 'Schedule',
      tickets: 'Tickets',
      news: 'News',
      contact: 'Contact',
    },
  },
  footer: {
    brand: 'BanLi',
    description: 'A modern event template, rebuilt as a reusable React component library.',
    columns: { event: 'Event', resources: 'Resources' },
    links: {
      about: 'About',
      speakers: 'Speakers',
      schedule: 'Schedule',
      tickets: 'Tickets',
      news: 'News',
      contact: 'Contact',
    },
    rights: 'All rights reserved.',
    builtWith: 'Built with React + Tailwind + Storybook.',
  },
  hero: {
    badge: 'AI Summit',
    primaryCta: 'Get Tickets',
    secondaryCta: 'View Schedule',
  },
  sections: {
    whyAttend: { eyebrow: 'Why Attend', title: "What you’ll gain" },
    speakers: { eyebrow: 'Speakers', title: 'Meet the visionaries' },
    schedule: { eyebrow: 'Schedule', title: '5 Days of AI excellence' },
    tickets: {
      eyebrow: 'Tickets',
      title: 'Choose your pass',
      subtitle: 'Pricing for teams, builders, and leaders. Upgrade anytime.',
      popular: 'Popular',
      buyPrefix: 'Buy',
      style2Title: 'Ticket Style 2',
      style2Subtitle: 'A compact layout suitable for checkout-style sections.',
      select: 'Select',
      cart: 'Cart',
      vat: 'VAT',
      total: 'Total',
      checkout: 'Checkout',
    },
    news: { eyebrow: 'News', title: 'Latest updates' },
    contact: { eyebrow: 'Contact', title: "Let’s talk", intro: 'Want to partner, sponsor, or ask about tickets? Leave us a message.' },
  },
  contactForm: {
    fields: { name: 'Name', email: 'Email', message: 'Message' },
    placeholders: { name: 'Your name', email: 'you@example.com', message: 'How can we help?' },
    errors: {
      nameRequired: 'Name is required',
      emailRequired: 'Email is required',
      emailInvalid: 'Email format is invalid',
      messageRequired: 'Message is required',
    },
    submit: { sending: 'Sending…', send: 'Send Message' },
    helper: 'Submitting will call the onSubmit callback so you can wire up your API.',
  },
  contactInfo: {
    locationLabel: 'Location',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
  },
}

export type AiventMessagesOverride = PartialDeep<AiventMessages>
