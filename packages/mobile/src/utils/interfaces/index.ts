//pages/CreateAppointment
export interface IRoutesParams {
  providerId: string;
}

export interface IProvider {
  id: string;
  name: string;
  avatar_url: string;
}

export interface IVailabilityItem {
  hour: Number;
  available: boolean;
}

//pages/CreateAppointments/styles.ts
export interface IProviderContainerProps {
  selected: boolean;
}

export interface IProviderNameProps {
  selected: boolean;
}

export interface IHourProps {
  available: boolean;
  selected: boolean;
}

export interface IHourTextProps {
  selected: boolean;
}

//pages/AppointmentCreated
export interface IRouteParams {
  date: number;
}
