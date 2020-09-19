import { Injectable } from '@angular/core';
import { ApiCommonService } from 'src/app-core/services/api-common-service';

@Injectable({ providedIn: 'root' })

export class ResolutionService {

    constructor(
        private apiCOmmonService: ApiCommonService
    ) {

    }

    getResolutionTypes() {
        return this.apiCOmmonService.get('Resolution/Types');
    }
}