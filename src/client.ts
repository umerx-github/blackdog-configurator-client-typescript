import {
    Symbol as SymbolTypes,
    Strategy as StrategyTypes,
    Order as OrderTypes,
    Position as PositionTypes,
    StrategyTemplateSeaDogDiscountScheme as StrategyTemplateSeaDogDiscountSchemeTypes,
} from '@umerx/umerx-blackdog-configurator-types-typescript';
import { URLSearchParams } from 'url';
import axios from 'axios';

export interface Symbol {
    getMany(
        query: SymbolTypes.SymbolGetManyRequestQuery
    ): Promise<SymbolTypes.SymbolGetManyResponseBody>;
    getSingle(
        params: SymbolTypes.SymbolGetSingleRequestParams
    ): Promise<SymbolTypes.SymbolGetSingleResponseBody>;
    postMany(
        body: SymbolTypes.SymbolPostManyRequestBody
    ): Promise<SymbolTypes.SymbolPostManyResponseBody>;
    putMany(
        body: SymbolTypes.SymbolPostManyRequestBody
    ): Promise<SymbolTypes.SymbolPutManyResponseBody>;
    putSingle(
        params: SymbolTypes.SymbolPutSingleRequestParams,
        body: SymbolTypes.SymbolPutSingleRequestBody
    ): Promise<SymbolTypes.SymbolPutSingleResponseBody>;
    patchMany(
        body: SymbolTypes.SymbolPatchManyRequestBody
    ): Promise<SymbolTypes.SymbolPatchManyResponseBody>;
    patchSingle(
        params: SymbolTypes.SymbolPatchSingleRequestParams,
        body: SymbolTypes.SymbolPatchSingleRequestBody
    ): Promise<SymbolTypes.SymbolPatchSingleResponseBody>;
    deleteMany(
        query: SymbolTypes.SymbolDeleteManyRequestQuery
    ): Promise<SymbolTypes.SymbolDeleteManyResponseBody>;
    deleteSingle(
        params: SymbolTypes.SymbolDeleteSingleRequestParams
    ): Promise<SymbolTypes.SymbolDeleteSingleResponseBody>;
}

export interface Strategy {
    getMany(
        query: StrategyTypes.StrategyGetManyRequestQuery
    ): Promise<StrategyTypes.StrategyGetManyResponseBody>;
    getSingle(
        params: StrategyTypes.StrategyGetSingleRequestParams
    ): Promise<StrategyTypes.StrategyGetSingleResponseBody>;
    postMany(
        body: StrategyTypes.StrategyPostManyRequestBody
    ): Promise<StrategyTypes.StrategyPostManyResponseBody>;
    putMany(
        body: StrategyTypes.StrategyPostManyRequestBody
    ): Promise<StrategyTypes.StrategyPutManyResponseBody>;
    putSingle(
        params: StrategyTypes.StrategyPutSingleRequestParams,
        body: StrategyTypes.StrategyPutSingleRequestBody
    ): Promise<StrategyTypes.StrategyPutSingleResponseBody>;
    patchMany(
        body: StrategyTypes.StrategyPatchManyRequestBody
    ): Promise<StrategyTypes.StrategyPatchManyResponseBody>;
    patchSingle(
        params: StrategyTypes.StrategyPatchSingleRequestParams,
        body: StrategyTypes.StrategyPatchSingleRequestBody
    ): Promise<StrategyTypes.StrategyPatchSingleResponseBody>;
    deleteMany(
        query: StrategyTypes.StrategyDeleteManyRequestQuery
    ): Promise<StrategyTypes.StrategyDeleteManyResponseBody>;
    deleteSingle(
        params: StrategyTypes.StrategyDeleteSingleRequestParams
    ): Promise<StrategyTypes.StrategyDeleteSingleResponseBody>;
}

export interface Order {
    getMany(
        query: OrderTypes.OrderGetManyRequestQuery
    ): Promise<OrderTypes.OrderGetManyResponseBody>;
    getSingle(
        params: OrderTypes.OrderGetSingleRequestParams
    ): Promise<OrderTypes.OrderGetSingleResponseBody>;
    postMany(
        body: OrderTypes.OrderPostManyRequestBody
    ): Promise<OrderTypes.OrderPostManyResponseBody>;
    putMany(
        body: OrderTypes.OrderPostManyRequestBody
    ): Promise<OrderTypes.OrderPutManyResponseBody>;
    putSingle(
        params: OrderTypes.OrderPutSingleRequestParams,
        body: OrderTypes.OrderPutSingleRequestBody
    ): Promise<OrderTypes.OrderPutSingleResponseBody>;
    patchMany(
        body: OrderTypes.OrderPatchManyRequestBody
    ): Promise<OrderTypes.OrderPatchManyResponseBody>;
    patchSingle(
        params: OrderTypes.OrderPatchSingleRequestParams,
        body: OrderTypes.OrderPatchSingleRequestBody
    ): Promise<OrderTypes.OrderPatchSingleResponseBody>;
    deleteMany(
        query: OrderTypes.OrderDeleteManyRequestQuery
    ): Promise<OrderTypes.OrderDeleteManyResponseBody>;
    deleteSingle(
        params: OrderTypes.OrderDeleteSingleRequestParams
    ): Promise<OrderTypes.OrderDeleteSingleResponseBody>;
}

export interface Position {
    getMany(
        query: PositionTypes.PositionGetManyRequestQuery
    ): Promise<PositionTypes.PositionGetManyResponseBody>;
    getSingle(
        params: PositionTypes.PositionGetSingleRequestParams
    ): Promise<PositionTypes.PositionGetSingleResponseBody>;
    postMany(
        body: PositionTypes.PositionPostManyRequestBody
    ): Promise<PositionTypes.PositionPostManyResponseBody>;
    putMany(
        body: PositionTypes.PositionPostManyRequestBody
    ): Promise<PositionTypes.PositionPutManyResponseBody>;
    putSingle(
        params: PositionTypes.PositionPutSingleRequestParams,
        body: PositionTypes.PositionPutSingleRequestBody
    ): Promise<PositionTypes.PositionPutSingleResponseBody>;
    patchMany(
        body: PositionTypes.PositionPatchManyRequestBody
    ): Promise<PositionTypes.PositionPatchManyResponseBody>;
    patchSingle(
        params: PositionTypes.PositionPatchSingleRequestParams,
        body: PositionTypes.PositionPatchSingleRequestBody
    ): Promise<PositionTypes.PositionPatchSingleResponseBody>;
    deleteMany(
        query: PositionTypes.PositionDeleteManyRequestQuery
    ): Promise<PositionTypes.PositionDeleteManyResponseBody>;
    deleteSingle(
        params: PositionTypes.PositionDeleteSingleRequestParams
    ): Promise<PositionTypes.PositionDeleteSingleResponseBody>;
}

export interface StrategyTemplateSeaDogDiscountScheme {
    getMany(
        query: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetManyRequestQuery
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetManyResponseBody>;
    getSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetSingleRequestParams
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetSingleResponseBody>;
    postMany(
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyResponseBody>;
    putMany(
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutManyResponseBody>;
    putSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutSingleRequestParams,
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutSingleRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutSingleResponseBody>;
    patchMany(
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchManyRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchManyResponseBody>;
    patchSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchSingleRequestParams,
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchSingleRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchSingleResponseBody>;
    deleteMany(
        query: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteManyRequestQuery
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteManyResponseBody>;
    deleteSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteSingleRequestParams
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteSingleResponseBody>;
}

export interface Client {
    symbol(): Symbol;
}

export class SymbolImpl implements Symbol {
    constructor(
        private readonly scheme: string,
        private readonly host: string,
        private readonly baseUrl: string
    ) {}

    async getMany(
        query: SymbolTypes.SymbolGetManyRequestQuery
    ): Promise<SymbolTypes.SymbolGetManyResponseBody> {
        const response = await axios.get<SymbolTypes.SymbolGetManyResponseBody>(
            `${this.scheme}://${this.host}${this.baseUrl}/${new URLSearchParams(
                Object.entries(query)
            ).toString()}`
        );
        return SymbolTypes.SymbolGetManyResponseBodyFromRaw(response.data);
    }
    async getSingle(
        params: SymbolTypes.SymbolGetSingleRequestParams
    ): Promise<SymbolTypes.SymbolGetSingleResponseBody> {
        const response =
            await axios.get<SymbolTypes.SymbolGetSingleResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}/${params.id}`
            );
        return SymbolTypes.SymbolGetSingleResponseBodyFromRaw(response.data);
    }
    async postMany(
        body: SymbolTypes.SymbolPostManyRequestBody
    ): Promise<SymbolTypes.SymbolPostManyResponseBody> {
        const response =
            await axios.post<SymbolTypes.SymbolPostManyResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}`,
                body
            );
        return SymbolTypes.SymbolPostManyResponseBodyFromRaw(response.data);
    }
    async putMany(
        body: SymbolTypes.SymbolPostManyRequestBody
    ): Promise<SymbolTypes.SymbolPutManyResponseBody> {
        const response = await axios.put<SymbolTypes.SymbolPutManyResponseBody>(
            `${this.scheme}://${this.host}${this.baseUrl}`,
            body
        );
        return SymbolTypes.SymbolPutManyResponseBodyFromRaw(response.data);
    }
    async putSingle(
        params: SymbolTypes.SymbolPutSingleRequestParams,
        body: SymbolTypes.SymbolPutSingleRequestBody
    ): Promise<SymbolTypes.SymbolPutSingleResponseBody> {
        const response =
            await axios.put<SymbolTypes.SymbolPutSingleResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}/${params.id}`,
                body
            );
        return SymbolTypes.SymbolPutSingleResponseBodyFromRaw(response.data);
    }
    async patchMany(
        body: SymbolTypes.SymbolPatchManyRequestBody
    ): Promise<SymbolTypes.SymbolPatchManyResponseBody> {
        const response =
            await axios.patch<SymbolTypes.SymbolPatchManyResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}`,
                body
            );
        return SymbolTypes.SymbolPatchManyResponseBodyFromRaw(response.data);
    }
    async patchSingle(
        params: SymbolTypes.SymbolPatchSingleRequestParams,
        body: SymbolTypes.SymbolPatchSingleRequestBody
    ): Promise<SymbolTypes.SymbolPatchSingleResponseBody> {
        const response =
            await axios.patch<SymbolTypes.SymbolPatchSingleResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}/${params.id}`,
                body
            );
        return SymbolTypes.SymbolPatchSingleResponseBodyFromRaw(response.data);
    }
    async deleteMany(
        query: SymbolTypes.SymbolDeleteManyRequestQuery
    ): Promise<SymbolTypes.SymbolDeleteManyResponseBody> {
        const response =
            await axios.delete<SymbolTypes.SymbolDeleteManyResponseBody>(
                `${this.scheme}://${this.host}${
                    this.baseUrl
                }/${new URLSearchParams(Object.entries(query)).toString()}`
            );
        return SymbolTypes.SymbolDeleteManyResponseBodyFromRaw(response.data);
    }
    async deleteSingle(
        params: SymbolTypes.SymbolDeleteSingleRequestParams
    ): Promise<SymbolTypes.SymbolDeleteSingleResponseBody> {
        const response =
            await axios.delete<SymbolTypes.SymbolDeleteSingleResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}/${params.id}`
            );
        return SymbolTypes.SymbolDeleteSingleResponseBodyFromRaw(response.data);
    }
}

export class StrategyImpl implements Strategy {
    constructor(
        private readonly scheme: string,
        private readonly host: string,
        private readonly baseUrl: string
    ) {}

    async getMany(
        query: StrategyTypes.StrategyGetManyRequestQuery
    ): Promise<StrategyTypes.StrategyGetManyResponseBody> {
        const response =
            await axios.get<StrategyTypes.StrategyGetManyResponseBody>(
                `${this.scheme}://${this.host}${
                    this.baseUrl
                }/${new URLSearchParams(Object.entries(query)).toString()}`
            );
        return StrategyTypes.StrategyGetManyResponseBodyFromRaw(response.data);
    }
    async getSingle(
        params: StrategyTypes.StrategyGetSingleRequestParams
    ): Promise<StrategyTypes.StrategyGetSingleResponseBody> {
        const response =
            await axios.get<StrategyTypes.StrategyGetSingleResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}/${params.id}`
            );
        return StrategyTypes.StrategyGetSingleResponseBodyFromRaw(
            response.data
        );
    }
    async postMany(
        body: StrategyTypes.StrategyPostManyRequestBody
    ): Promise<StrategyTypes.StrategyPostManyResponseBody> {
        const response =
            await axios.post<StrategyTypes.StrategyPostManyResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}`,
                body
            );
        return StrategyTypes.StrategyPostManyResponseBodyFromRaw(response.data);
    }
    async putMany(
        body: StrategyTypes.StrategyPostManyRequestBody
    ): Promise<StrategyTypes.StrategyPutManyResponseBody> {
        const response =
            await axios.put<StrategyTypes.StrategyPutManyResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}`,
                body
            );
        return StrategyTypes.StrategyPutManyResponseBodyFromRaw(response.data);
    }
    async putSingle(
        params: StrategyTypes.StrategyPutSingleRequestParams,
        body: StrategyTypes.StrategyPutSingleRequestBody
    ): Promise<StrategyTypes.StrategyPutSingleResponseBody> {
        const response =
            await axios.put<StrategyTypes.StrategyPutSingleResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}/${params.id}`,
                body
            );
        return StrategyTypes.StrategyPutSingleResponseBodyFromRaw(
            response.data
        );
    }
    async patchMany(
        body: StrategyTypes.StrategyPatchManyRequestBody
    ): Promise<StrategyTypes.StrategyPatchManyResponseBody> {
        const response =
            await axios.patch<StrategyTypes.StrategyPatchManyResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}`,
                body
            );
        return StrategyTypes.StrategyPatchManyResponseBodyFromRaw(
            response.data
        );
    }
    async patchSingle(
        params: StrategyTypes.StrategyPatchSingleRequestParams,
        body: StrategyTypes.StrategyPatchSingleRequestBody
    ): Promise<StrategyTypes.StrategyPatchSingleResponseBody> {
        const response =
            await axios.patch<StrategyTypes.StrategyPatchSingleResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}/${params.id}`,
                body
            );
        return StrategyTypes.StrategyPatchSingleResponseBodyFromRaw(
            response.data
        );
    }
    async deleteMany(
        query: StrategyTypes.StrategyDeleteManyRequestQuery
    ): Promise<StrategyTypes.StrategyDeleteManyResponseBody> {
        const response =
            await axios.delete<StrategyTypes.StrategyDeleteManyResponseBody>(
                `${this.scheme}://${this.host}${
                    this.baseUrl
                }/${new URLSearchParams(Object.entries(query)).toString()}`
            );
        return StrategyTypes.StrategyDeleteManyResponseBodyFromRaw(
            response.data
        );
    }
    async deleteSingle(
        params: StrategyTypes.StrategyDeleteSingleRequestParams
    ): Promise<StrategyTypes.StrategyDeleteSingleResponseBody> {
        const response =
            await axios.delete<StrategyTypes.StrategyDeleteSingleResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}/${params.id}`
            );
        return StrategyTypes.StrategyDeleteSingleResponseBodyFromRaw(
            response.data
        );
    }
}

export class OrderImpl implements Order {
    constructor(
        private readonly scheme: string,
        private readonly host: string,
        private readonly baseUrl: string
    ) {}

    async getMany(
        query: OrderTypes.OrderGetManyRequestQuery
    ): Promise<OrderTypes.OrderGetManyResponseBody> {
        const response = await axios.get<OrderTypes.OrderGetManyResponseBody>(
            `${this.scheme}://${this.host}${this.baseUrl}/${new URLSearchParams(
                Object.entries(query)
            ).toString()}`
        );
        return OrderTypes.OrderGetManyResponseBodyFromRaw(response.data);
    }
    async getSingle(
        params: OrderTypes.OrderGetSingleRequestParams
    ): Promise<OrderTypes.OrderGetSingleResponseBody> {
        const response = await axios.get<OrderTypes.OrderGetSingleResponseBody>(
            `${this.scheme}://${this.host}${this.baseUrl}/${params.id}`
        );
        return OrderTypes.OrderGetSingleResponseBodyFromRaw(response.data);
    }
    async postMany(
        body: OrderTypes.OrderPostManyRequestBody
    ): Promise<OrderTypes.OrderPostManyResponseBody> {
        const response = await axios.post<OrderTypes.OrderPostManyResponseBody>(
            `${this.scheme}://${this.host}${this.baseUrl}`,
            body
        );
        return OrderTypes.OrderPostManyResponseBodyFromRaw(response.data);
    }
    async putMany(
        body: OrderTypes.OrderPostManyRequestBody
    ): Promise<OrderTypes.OrderPutManyResponseBody> {
        const response = await axios.put<OrderTypes.OrderPutManyResponseBody>(
            `${this.scheme}://${this.host}${this.baseUrl}`,
            body
        );
        return OrderTypes.OrderPutManyResponseBodyFromRaw(response.data);
    }
    async putSingle(
        params: OrderTypes.OrderPutSingleRequestParams,
        body: OrderTypes.OrderPutSingleRequestBody
    ): Promise<OrderTypes.OrderPutSingleResponseBody> {
        const response = await axios.put<OrderTypes.OrderPutSingleResponseBody>(
            `${this.scheme}://${this.host}${this.baseUrl}/${params.id}`,
            body
        );
        return OrderTypes.OrderPutSingleResponseBodyFromRaw(response.data);
    }
    async patchMany(
        body: OrderTypes.OrderPatchManyRequestBody
    ): Promise<OrderTypes.OrderPatchManyResponseBody> {
        const response =
            await axios.patch<OrderTypes.OrderPatchManyResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}`,
                body
            );
        return OrderTypes.OrderPatchManyResponseBodyFromRaw(response.data);
    }
    async patchSingle(
        params: OrderTypes.OrderPatchSingleRequestParams,
        body: OrderTypes.OrderPatchSingleRequestBody
    ): Promise<OrderTypes.OrderPatchSingleResponseBody> {
        const response =
            await axios.patch<OrderTypes.OrderPatchSingleResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}/${params.id}`,
                body
            );
        return OrderTypes.OrderPatchSingleResponseBodyFromRaw(response.data);
    }
    async deleteMany(
        query: OrderTypes.OrderDeleteManyRequestQuery
    ): Promise<OrderTypes.OrderDeleteManyResponseBody> {
        const response =
            await axios.delete<OrderTypes.OrderDeleteManyResponseBody>(
                `${this.scheme}://${this.host}${
                    this.baseUrl
                }/${new URLSearchParams(Object.entries(query)).toString()}`
            );
        return OrderTypes.OrderDeleteManyResponseBodyFromRaw(response.data);
    }
    async deleteSingle(
        params: OrderTypes.OrderDeleteSingleRequestParams
    ): Promise<OrderTypes.OrderDeleteSingleResponseBody> {
        const response =
            await axios.delete<OrderTypes.OrderDeleteSingleResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}/${params.id}`
            );
        return OrderTypes.OrderDeleteSingleResponseBodyFromRaw(response.data);
    }
}

export class PositionImpl implements Position {
    constructor(
        private readonly scheme: string,
        private readonly host: string,
        private readonly baseUrl: string
    ) {}

    async getMany(
        query: PositionTypes.PositionGetManyRequestQuery
    ): Promise<PositionTypes.PositionGetManyResponseBody> {
        const response =
            await axios.get<PositionTypes.PositionGetManyResponseBody>(
                `${this.scheme}://${this.host}${
                    this.baseUrl
                }/${new URLSearchParams(Object.entries(query)).toString()}`
            );
        return PositionTypes.PositionGetManyResponseBodyFromRaw(response.data);
    }
    async getSingle(
        params: PositionTypes.PositionGetSingleRequestParams
    ): Promise<PositionTypes.PositionGetSingleResponseBody> {
        const response =
            await axios.get<PositionTypes.PositionGetSingleResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}/${params.id}`
            );
        return PositionTypes.PositionGetSingleResponseBodyFromRaw(
            response.data
        );
    }
    async postMany(
        body: PositionTypes.PositionPostManyRequestBody
    ): Promise<PositionTypes.PositionPostManyResponseBody> {
        const response =
            await axios.post<PositionTypes.PositionPostManyResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}`,
                body
            );
        return PositionTypes.PositionPostManyResponseBodyFromRaw(response.data);
    }
    async putMany(
        body: PositionTypes.PositionPostManyRequestBody
    ): Promise<PositionTypes.PositionPutManyResponseBody> {
        const response =
            await axios.put<PositionTypes.PositionPutManyResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}`,
                body
            );
        return PositionTypes.PositionPutManyResponseBodyFromRaw(response.data);
    }
    async putSingle(
        params: PositionTypes.PositionPutSingleRequestParams,
        body: PositionTypes.PositionPutSingleRequestBody
    ): Promise<PositionTypes.PositionPutSingleResponseBody> {
        const response =
            await axios.put<PositionTypes.PositionPutSingleResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}/${params.id}`,
                body
            );
        return PositionTypes.PositionPutSingleResponseBodyFromRaw(
            response.data
        );
    }
    async patchMany(
        body: PositionTypes.PositionPatchManyRequestBody
    ): Promise<PositionTypes.PositionPatchManyResponseBody> {
        const response =
            await axios.patch<PositionTypes.PositionPatchManyResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}`,
                body
            );
        return PositionTypes.PositionPatchManyResponseBody.FromRaw(
            response.data
        );
    }
    async patchSingle(
        params: PositionTypes.PositionPatchSingleRequestParams,
        body: PositionTypes.PositionPatchSingleRequestBody
    ): Promise<PositionTypes.PositionPatchSingleResponseBody> {
        const response =
            await axios.patch<PositionTypes.PositionPatchSingleResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}/${params.id}`,
                body
            );
        return PositionTypes.PositionPatchSingleResponseBodyFromRaw(
            response.data
        );
    }
    async deleteMany(
        query: PositionTypes.PositionDeleteManyRequestQuery
    ): Promise<PositionTypes.PositionDeleteManyResponseBody> {
        const response =
            await axios.delete<PositionTypes.PositionDeleteManyResponseBody>(
                `${this.scheme}://${this.host}${
                    this.baseUrl
                }/${new URLSearchParams(Object.entries(query)).toString()}`
            );
        return PositionTypes.PositionDeleteManyResponseBodyFromRaw(
            response.data
        );
    }
    async deleteSingle(
        params: PositionTypes.PositionDeleteSingleRequestParams
    ): Promise<PositionTypes.PositionDeleteSingleResponseBody> {
        const response =
            await axios.delete<PositionTypes.PositionDeleteSingleResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}/${params.id}`
            );
        return PositionTypes.PositionDeleteSingleResponseBodyFromRaw(
            response.data
        );
    }
}

export class StrategyTemplateSeaDogDiscountSchemeImpl
    implements StrategyTemplateSeaDogDiscountScheme
{
    constructor(
        private readonly scheme: string,
        private readonly host: string,
        private readonly baseUrl: string
    ) {}

    async getMany(
        query: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetManyRequestQuery
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetManyResponseBody> {
        const response =
            await axios.get<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetManyResponseBody>(
                `${this.scheme}://${this.host}${
                    this.baseUrl
                }/${new URLSearchParams(Object.entries(query)).toString()}`
            );
        return StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetManyResponseBodyFromRaw(
            response.data
        );
    }
    async getSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetSingleRequestParams
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetSingleResponseBody> {
        const response =
            await axios.get<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetSingleResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}/${params.id}`
            );
        return StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetSingleResponseBodyFromRaw(
            response.data
        );
    }
    async postMany(
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyResponseBody> {
        const response =
            await axios.post<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}`,
                body
            );
        return StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyResponseBodyFromRaw(
            response.data
        );
    }
    async putMany(
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutManyResponseBody> {
        const response =
            await axios.put<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutManyResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}`,
                body
            );
        return StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutManyResponseBodyFromRaw(
            response.data
        );
    }
    async putSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutSingleRequestParams,
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutSingleRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutSingleResponseBody> {
        const response =
            await axios.put<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutSingleResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}/${params.id}`,
                body
            );
        return StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutSingleResponseBodyFromRaw(
            response.data
        );
    }
    async patchMany(
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchManyRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchManyResponseBody> {
        const response =
            await axios.patch<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchManyResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}`,
                body
            );
        return StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchManyResponseBodyFromRaw(
            response.data
        );
    }
    async patchSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchSingleRequestParams,
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchSingleRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchSingleResponseBody> {
        const response =
            await axios.patch<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchSingleResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}/${params.id}`,
                body
            );
        return StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchSingleResponseBodyFromRaw(
            response.data
        );
    }
    async deleteMany(
        query: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteManyRequestQuery
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteManyResponseBody> {
        const response =
            await axios.delete<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteManyResponseBody>(
                `${this.scheme}://${this.host}${
                    this.baseUrl
                }/${new URLSearchParams(Object.entries(query)).toString()}`
            );
        return StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteManyResponseBodyFromRaw(
            response.data
        );
    }
    async deleteSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteSingleRequestParams
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteSingleResponseBody> {
        const response =
            await axios.delete<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteSingleResponseBody>(
                `${this.scheme}://${this.host}${this.baseUrl}/${params.id}`
            );
        return StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteSingleResponseBodyFromRaw(
            response.data
        );
    }
}

export class ClientImpl implements Client {
    constructor(
        private readonly scheme: string,
        private readonly host: string,
        private readonly baseUrl: string
    ) {}

    symbol(): Symbol {
        return new SymbolImpl(this.scheme, this.host, this.baseUrl);
    }
    strategy(): Strategy {
        return new StrategyImpl(this.scheme, this.host, this.baseUrl);
    }
    order(): Order {
        return new OrderImpl(this.scheme, this.host, this.baseUrl);
    }
    position(): Position {
        return new PositionImpl(this.scheme, this.host, this.baseUrl);
    }
    strategyTemplateSeaDogDiscountScheme(): StrategyTemplateSeaDogDiscountScheme {
        return new StrategyTemplateSeaDogDiscountSchemeImpl(
            this.scheme,
            this.host,
            this.baseUrl
        );
    }
}
