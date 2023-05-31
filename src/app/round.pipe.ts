import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'roundNumber' })

export default class roundNumberPipe implements PipeTransform {
    transform(value: number, isUpper: boolean = false, addTo: number = 0 ): number {
        return isUpper ? Math.ceil(value + addTo ) : Math.floor(value + addTo);
    }

}