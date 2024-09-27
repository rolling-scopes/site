export type Event = {
  eventType: string;
  title: string;
  organizedBy: string; // organizer name or place (e.g. 'Vilnius, Lithuania' or 'online')
  organization: string;
  additionalInfo?: string;
  date: string;
  time: string;
  type: string;
  address: string;
  city: string;
  href: string;
};
