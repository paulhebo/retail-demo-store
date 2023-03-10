// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import axios from "axios";
import resolveBaseURL from './resolveBaseURL'

const baseURL = resolveBaseURL(
    process.env.VUE_APP_SEARCH_SERVICE_DOMAIN,
    process.env.VUE_APP_SEARCH_SERVICE_PORT,
    process.env.VUE_APP_SEARCH_SERVICE_PATH
)

const connection = axios.create({
    baseURL
})

const resource = "/search";

export default {
    searchProducts(val, size = 10, offset = 0, index_server = 1) {
        if (!val || val.length == 0)
            throw "val required"
	if (index_server == 2){
	    return connection.get(`${resource}/products2?searchTerm=${val}&size=${size}&offset=${offset}`)
	}else if(index_server == 3){
	    return connection.get(`${resource}/products3?searchTerm=${val}&size=${size}&offset=${offset}`)
	}else{
            return connection.get(`${resource}/products?searchTerm=${val}&size=${size}&offset=${offset}`)
	}
    },
}
