'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

const ProductSelect = () => {

    const [priceRange, setPriceRange] = useState('all');
    const router = useRouter()
    const searchParams = useSearchParams()
    const search = searchParams.get('search')
    const [pricing] = useDebounce(priceRange, 400)
    const handlePriceRangeChange = (event: any) => {
        setPriceRange(event.target.value);
    };

    useEffect(() => {
        const searchQuery = search ? `search=${search}` : "";
        const rangeQuery = pricing !== 'all' ? `range=${pricing}` : "";

        const queryString = [rangeQuery, searchQuery].filter(Boolean).join("&");
        const url = queryString ? `/?${queryString}` : "/";
        router.push(
            url,
            { scroll: false }
        );
        // window.history.replaceState({ ...window.history.state, as: url, url: url }, '', url);

    }, [pricing])

    return (
        <div className="flex flex-col gap-1 shrink-0 sm:min-w-[180px]">
            <label htmlFor="priceRange" className="hidden">اختر نطاق السعر</label>
            <select
                onChange={handlePriceRangeChange}

                id="priceRange" name="priceRange" className="bg-white border text-md rounded-md focus:ring-secondary-50 focus:border-secondary-50 block w-full px-2 py-1">
                <option selected value="all">الكل</option>
                <option value="under_1000">أقل من 1000</option>
                <option value="1000_2000">1000 - 2000</option>
                <option value="2000_3000">2000 - 3000</option>
                <option value="3000_more">3000 أكثر من</option>
            </select>
        </div>
    );
};

export default ProductSelect;
