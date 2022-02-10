export enum PerformanceMetricName {
  GraphNGDataRenderDelay = 'graphng_data_render_delay',
  LiveDashboardRenderBudgetExceeded = 'live_dashboard_render_budget_exceeded',
}

declare global {
  interface Window {
    grafanaPerformanceMetrics?: {
      add: (name: PerformanceMetricName, value: number | (() => number)) => void;
      enabled: () => boolean;
    };
  }
}

export {};