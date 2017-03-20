import { PipeTransform, Pipe } from '@angular/core';

import { Listings } from '../../listings';

@Pipe({
    name: 'listingFilter'
})

export class ListingsFilterPipe implements PipeTransform{

    transform( value: Listings[], filterBy: string): Listings[]{
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((listing: Listings) =>
        listing.content.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
