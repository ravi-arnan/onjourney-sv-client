import { writable } from 'svelte/store';

type AuthUiState = {
	isAuthenticated: boolean;
	userName: string;
};

type ExploreState = {
	query: string;
	activeTab: 'explore' | 'agents' | 'destination' | 'packages';
};

type BookingState = {
	selectedPackageId: string | null;
	currentStep: 'booking' | 'payment' | 'summary';
};

const authInitial: AuthUiState = {
	isAuthenticated: false,
	userName: ''
};

const exploreInitial: ExploreState = {
	query: '',
	activeTab: 'explore'
};

const bookingInitial: BookingState = {
	selectedPackageId: null,
	currentStep: 'booking'
};

export const authUiStore = writable<AuthUiState>(authInitial);
export const exploreStore = writable<ExploreState>(exploreInitial);
export const bookingStore = writable<BookingState>(bookingInitial);

export const setExploreTab = (activeTab: ExploreState['activeTab']) => {
	exploreStore.update((state) => ({ ...state, activeTab }));
};

export const setBookingStep = (currentStep: BookingState['currentStep']) => {
	bookingStore.update((state) => ({ ...state, currentStep }));
};
