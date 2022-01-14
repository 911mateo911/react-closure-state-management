export type Subscriber = {
    key: string;
    value: unknown;
    callbacks: ((value: unknown) => void)[];
}

export type SubscribersStore = {
    [key: string]: Subscriber;
}
