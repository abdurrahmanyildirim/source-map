import { ErrorHandler } from '@angular/core';
import { Notifier } from '@airbrake/browser';

export class AirbrakeErrorHandler implements ErrorHandler {
    airbrake: Notifier;

    constructor() {
        this.airbrake = new Notifier({
            projectId: 261469,
            projectKey: '1ed3e03bb075940400d65b86e4a087a8',
            environment: 'production'
        });
    }

    handleError(error: Error) {
        this.airbrake.notify({
            error,
            params: { hata: 'sad' }
        });
    }
}
