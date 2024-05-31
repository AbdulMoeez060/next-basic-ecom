'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'

const ProductSearch = () => {
    const [search, setSearch] = useState("")
    const router = useRouter()
    const searchParams = useSearchParams()
    const range = searchParams.get('range')

    const [query] = useDebounce(search, 500)
    // currently we don't have paginated or filter api so we have to do this
    useEffect(() => {

        const searchQuery = query !== '' ? `search=${query}` : "";
        const rangeQuery = range ? `range=${range}` : "";

        const queryString = [searchQuery, rangeQuery].filter(Boolean).join("&");
        const url = queryString ? `/?${queryString}` : "/";

        router.push(
            url,
            { scroll: false } as any
        );
        // window.history.replaceState({ ...window.history.state, as: url, url: url }, '', url);

    }, [query])

    return (
        <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="product_query" className="hidden">ابحث عن منتج</label>
            <input type="text" id="product_query" name="product_query" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full p-2 bg-white appearance-none rounded-md border text-md" placeholder="ادخل اسم المنتج..." />
        </div>
    )
}

export default ProductSearch