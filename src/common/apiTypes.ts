export interface Activity {
  id: number;
  name: string;
  description: string;
  capacity: number;
  duration: number;
  image: string;
}

export interface Event {
  id: number;
  activity: Activity;
  start_datetime: string;
  end_datetime: string;
  attendees: number;
  available_capacity: number;
  available: boolean;
  str_start_time: string;
  str_end_time: string;
}

export interface FAQCategories{
  name: string;
  id: number;
  faqs: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string;
  id: number;
}

export interface EventDay {
  [key: string]: Event[];
}

export interface ContactForm{
  first_name?: string;
  last_name?:string;
  email?: string;
  phone?: string;
  message?: string;
}