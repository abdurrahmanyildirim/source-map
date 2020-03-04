import bugsnag, { Bugsnag } from '@bugsnag/js';
import { BugsnagErrorHandler } from '@bugsnag/plugin-angular';

export class BugsNagErrorService implements BugsnagErrorHandler {

    bugsnagClient: Bugsnag.Client;

    constructor() {
        this.bugsnagClient = bugsnag({
            apiKey: 'c5ff9ba8c61ee9dbf99388d7141a279b',
            appVersion: '0.0.0'
        });
    }

    handleError(error: Error) {
        this.bugsnagClient.notify(error);
    }
}
