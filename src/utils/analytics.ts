export interface AnalyticsEvent {
  eventName: string;
  category: 'engagement' | 'conversion' | 'lead' | 'outbound';
  label?: string;
  value?: number | string;
  metadata?: Record<string, unknown>;
  timestamp: string;
}

class AnalyticsManager {
  private events: AnalyticsEvent[] = [];
  private listeners: ((event: AnalyticsEvent) => void)[] = [];

  track(eventName: string, category: AnalyticsEvent['category'], label?: string, metadata?: Record<string, unknown>) {
    const event: AnalyticsEvent = {
      eventName,
      category,
      label,
      metadata,
      timestamp: new Date().toISOString()
    };

    this.events.unshift(event);
    if (this.events.length > 50) this.events.pop();

    // Standard dataLayer push if GTM exists
    if (typeof window !== 'undefined') {
      const win = window as unknown as { dataLayer?: unknown[] };
      win.dataLayer = win.dataLayer || [];
      win.dataLayer.push({
        event: eventName,
        event_category: category,
        event_label: label,
        ...metadata
      });
    }

    // Notify internal subscribers
    this.listeners.forEach((listener) => listener(event));
  }

  subscribe(callback: (event: AnalyticsEvent) => void) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== callback);
    };
  }

  getRecentEvents(): AnalyticsEvent[] {
    return this.events;
  }
}

export const analytics = new AnalyticsManager();
