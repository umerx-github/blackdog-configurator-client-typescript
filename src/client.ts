import {
    Symbol as SymbolTypes,
    Strategy as StrategyTypes,
    Order as OrderTypes,
    Position as PositionTypes,
    StrategyTemplateSeaDogDiscountScheme as StrategyTemplateSeaDogDiscountSchemeTypes,
} from '@umerx/umerx-blackdog-configurator-types-typescript';
import axios from 'axios';

export class ClientResponseError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ClientResponseError';
    }
}
export interface Symbol {
    getMany(
        query: SymbolTypes.SymbolGetManyRequestQuery
    ): Promise<SymbolTypes.SymbolGetManyResponseBodyData>;
    getSingle(
        params: SymbolTypes.SymbolGetSingleRequestParams
    ): Promise<SymbolTypes.SymbolGetSingleResponseBodyData>;
    postMany(
        body: SymbolTypes.SymbolPostManyRequestBody
    ): Promise<SymbolTypes.SymbolPostManyResponseBodyData>;
    putMany(
        body: SymbolTypes.SymbolPostManyRequestBody
    ): Promise<SymbolTypes.SymbolPutManyResponseBodyData>;
    putSingle(
        params: SymbolTypes.SymbolPutSingleRequestParams,
        body: SymbolTypes.SymbolPutSingleRequestBody
    ): Promise<SymbolTypes.SymbolPutSingleResponseBodyData>;
    patchMany(
        body: SymbolTypes.SymbolPatchManyRequestBody
    ): Promise<SymbolTypes.SymbolPatchManyResponseBodyData>;
    patchSingle(
        params: SymbolTypes.SymbolPatchSingleRequestParams,
        body: SymbolTypes.SymbolPatchSingleRequestBody
    ): Promise<SymbolTypes.SymbolPatchSingleResponseBodyData>;
    deleteMany(
        query: SymbolTypes.SymbolDeleteManyRequestQuery
    ): Promise<SymbolTypes.SymbolDeleteManyResponseBodyData>;
    deleteSingle(
        params: SymbolTypes.SymbolDeleteSingleRequestParams
    ): Promise<SymbolTypes.SymbolDeleteSingleResponseBodyData>;
}

export interface Strategy {
    getMany(
        query: StrategyTypes.StrategyGetManyRequestQuery
    ): Promise<StrategyTypes.StrategyGetManyResponseBodyData>;
    getSingle(
        params: StrategyTypes.StrategyGetSingleRequestParams
    ): Promise<StrategyTypes.StrategyGetSingleResponseBodyData>;
    postMany(
        body: StrategyTypes.StrategyPostManyRequestBody
    ): Promise<StrategyTypes.StrategyPostManyResponseBodyData>;
    putMany(
        body: StrategyTypes.StrategyPostManyRequestBody
    ): Promise<StrategyTypes.StrategyPutManyResponseBodyData>;
    putSingle(
        params: StrategyTypes.StrategyPutSingleRequestParams,
        body: StrategyTypes.StrategyPutSingleRequestBody
    ): Promise<StrategyTypes.StrategyPutSingleResponseBodyData>;
    patchMany(
        body: StrategyTypes.StrategyPatchManyRequestBody
    ): Promise<StrategyTypes.StrategyPatchManyResponseBodyData>;
    patchSingle(
        params: StrategyTypes.StrategyPatchSingleRequestParams,
        body: StrategyTypes.StrategyPatchSingleRequestBody
    ): Promise<StrategyTypes.StrategyPatchSingleResponseBodyData>;
    deleteMany(
        query: StrategyTypes.StrategyDeleteManyRequestQuery
    ): Promise<StrategyTypes.StrategyDeleteManyResponseBodyData>;
    deleteSingle(
        params: StrategyTypes.StrategyDeleteSingleRequestParams
    ): Promise<StrategyTypes.StrategyDeleteSingleResponseBodyData>;
}

export interface Order {
    getMany(
        query: OrderTypes.OrderGetManyRequestQuery
    ): Promise<OrderTypes.OrderGetManyResponseBodyData>;
    getSingle(
        params: OrderTypes.OrderGetSingleRequestParams
    ): Promise<OrderTypes.OrderGetSingleResponseBodyData>;
    postMany(
        body: OrderTypes.OrderPostManyRequestBody
    ): Promise<OrderTypes.OrderPostManyResponseBodyData>;
    putMany(
        body: OrderTypes.OrderPostManyRequestBody
    ): Promise<OrderTypes.OrderPutManyResponseBodyData>;
    putSingle(
        params: OrderTypes.OrderPutSingleRequestParams,
        body: OrderTypes.OrderPutSingleRequestBody
    ): Promise<OrderTypes.OrderPutSingleResponseBodyData>;
    patchMany(
        body: OrderTypes.OrderPatchManyRequestBody
    ): Promise<OrderTypes.OrderPatchManyResponseBodyData>;
    patchSingle(
        params: OrderTypes.OrderPatchSingleRequestParams,
        body: OrderTypes.OrderPatchSingleRequestBody
    ): Promise<OrderTypes.OrderPatchSingleResponseBodyData>;
    deleteMany(
        query: OrderTypes.OrderDeleteManyRequestQuery
    ): Promise<OrderTypes.OrderDeleteManyResponseBodyData>;
    deleteSingle(
        params: OrderTypes.OrderDeleteSingleRequestParams
    ): Promise<OrderTypes.OrderDeleteSingleResponseBodyData>;
}

export interface Position {
    getMany(
        query: PositionTypes.PositionGetManyRequestQuery
    ): Promise<PositionTypes.PositionGetManyResponseBodyData>;
    getSingle(
        params: PositionTypes.PositionGetSingleRequestParams
    ): Promise<PositionTypes.PositionGetSingleResponseBodyData>;
    postMany(
        body: PositionTypes.PositionPostManyRequestBody
    ): Promise<PositionTypes.PositionPostManyResponseBodyData>;
    putMany(
        body: PositionTypes.PositionPostManyRequestBody
    ): Promise<PositionTypes.PositionPutManyResponseBodyData>;
    putSingle(
        params: PositionTypes.PositionPutSingleRequestParams,
        body: PositionTypes.PositionPutSingleRequestBody
    ): Promise<PositionTypes.PositionPutSingleResponseBodyData>;
    patchMany(
        body: PositionTypes.PositionPatchManyRequestBody
    ): Promise<PositionTypes.PositionPatchManyResponseBodyData>;
    patchSingle(
        params: PositionTypes.PositionPatchSingleRequestParams,
        body: PositionTypes.PositionPatchSingleRequestBody
    ): Promise<PositionTypes.PositionPatchSingleResponseBodyData>;
    deleteMany(
        query: PositionTypes.PositionDeleteManyRequestQuery
    ): Promise<PositionTypes.PositionDeleteManyResponseBodyData>;
    deleteSingle(
        params: PositionTypes.PositionDeleteSingleRequestParams
    ): Promise<PositionTypes.PositionDeleteSingleResponseBodyData>;
}

export interface StrategyTemplateSeaDogDiscountScheme {
    getMany(
        query: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetManyRequestQuery
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetManyResponseBodyData>;
    getSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetSingleRequestParams
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetSingleResponseBodyData>;
    postMany(
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyResponseBodyData>;
    putMany(
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutManyResponseBodyData>;
    putSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutSingleRequestParams,
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutSingleRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutSingleResponseBodyData>;
    patchMany(
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchManyRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchManyResponseBodyData>;
    patchSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchSingleRequestParams,
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchSingleRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchSingleResponseBodyData>;
    deleteMany(
        query: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteManyRequestQuery
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteManyResponseBodyData>;
    deleteSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteSingleRequestParams
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteSingleResponseBodyData>;
}

export interface Client {
    symbol(): Symbol;
}

export class SymbolImpl implements Symbol {
    constructor(public readonly baseUrl: string) {}

    async getMany(
        query: SymbolTypes.SymbolGetManyRequestQuery
    ): Promise<SymbolTypes.SymbolGetManyResponseBodyData> {
        const response = await axios.get<SymbolTypes.SymbolGetManyResponseBody>(
            `${this.baseUrl}/?${new URLSearchParams(
                Object.entries(query)
            ).toString()}`
        );
        const responseData = SymbolTypes.SymbolGetManyResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async getSingle(
        params: SymbolTypes.SymbolGetSingleRequestParams
    ): Promise<SymbolTypes.SymbolGetSingleResponseBodyData> {
        const response =
            await axios.get<SymbolTypes.SymbolGetSingleResponseBody>(
                `${this.baseUrl}/${params.id}`
            );
        const responseData = SymbolTypes.SymbolGetSingleResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async postMany(
        body: SymbolTypes.SymbolPostManyRequestBody
    ): Promise<SymbolTypes.SymbolPostManyResponseBodyData> {
        const response =
            await axios.post<SymbolTypes.SymbolPostManyResponseBody>(
                `${this.baseUrl}`,
                body
            );
        const responseData = SymbolTypes.SymbolPostManyResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async putMany(
        body: SymbolTypes.SymbolPostManyRequestBody
    ): Promise<SymbolTypes.SymbolPutManyResponseBodyData> {
        const response = await axios.put<SymbolTypes.SymbolPutManyResponseBody>(
            `${this.baseUrl}`,
            body
        );
        const responseData = SymbolTypes.SymbolPutManyResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async putSingle(
        params: SymbolTypes.SymbolPutSingleRequestParams,
        body: SymbolTypes.SymbolPutSingleRequestBody
    ): Promise<SymbolTypes.SymbolPutSingleResponseBodyData> {
        const response =
            await axios.put<SymbolTypes.SymbolPutSingleResponseBody>(
                `${this.baseUrl}/${params.id}`,
                body
            );
        const responseData = SymbolTypes.SymbolPutSingleResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async patchMany(
        body: SymbolTypes.SymbolPatchManyRequestBody
    ): Promise<SymbolTypes.SymbolPatchManyResponseBodyData> {
        const response =
            await axios.patch<SymbolTypes.SymbolPatchManyResponseBody>(
                `${this.baseUrl}`,
                body
            );
        const responseData = SymbolTypes.SymbolPatchManyResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async patchSingle(
        params: SymbolTypes.SymbolPatchSingleRequestParams,
        body: SymbolTypes.SymbolPatchSingleRequestBody
    ): Promise<SymbolTypes.SymbolPatchSingleResponseBodyData> {
        const response =
            await axios.patch<SymbolTypes.SymbolPatchSingleResponseBody>(
                `${this.baseUrl}/${params.id}`,
                body
            );
        const responseData = SymbolTypes.SymbolPatchSingleResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async deleteMany(
        query: SymbolTypes.SymbolDeleteManyRequestQuery
    ): Promise<SymbolTypes.SymbolDeleteManyResponseBodyData> {
        const response =
            await axios.delete<SymbolTypes.SymbolDeleteManyResponseBody>(
                `${this.baseUrl}/?${new URLSearchParams(
                    Object.entries(query)
                ).toString()}`
            );
        const responseData = SymbolTypes.SymbolDeleteManyResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async deleteSingle(
        params: SymbolTypes.SymbolDeleteSingleRequestParams
    ): Promise<SymbolTypes.SymbolDeleteSingleResponseBodyData> {
        const response =
            await axios.delete<SymbolTypes.SymbolDeleteSingleResponseBody>(
                `${this.baseUrl}/${params.id}`
            );
        const responseData = SymbolTypes.SymbolDeleteSingleResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
}

export class StrategyImpl implements Strategy {
    constructor(public readonly baseUrl: string) {}

    async getMany(
        query: StrategyTypes.StrategyGetManyRequestQuery
    ): Promise<StrategyTypes.StrategyGetManyResponseBodyData> {
        const response =
            await axios.get<StrategyTypes.StrategyGetManyResponseBody>(
                `${this.baseUrl}/?${new URLSearchParams(
                    Object.entries(query)
                ).toString()}`
            );
        const responseData = StrategyTypes.StrategyGetManyResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async getSingle(
        params: StrategyTypes.StrategyGetSingleRequestParams
    ): Promise<StrategyTypes.StrategyGetSingleResponseBodyData> {
        const response =
            await axios.get<StrategyTypes.StrategyGetSingleResponseBody>(
                `${this.baseUrl}/${params.id}`
            );
        const responseData = StrategyTypes.StrategyGetSingleResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async postMany(
        body: StrategyTypes.StrategyPostManyRequestBody
    ): Promise<StrategyTypes.StrategyPostManyResponseBodyData> {
        const response =
            await axios.post<StrategyTypes.StrategyPostManyResponseBody>(
                `${this.baseUrl}`,
                body
            );
        const responseData = StrategyTypes.StrategyPostManyResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async putMany(
        body: StrategyTypes.StrategyPostManyRequestBody
    ): Promise<StrategyTypes.StrategyPutManyResponseBodyData> {
        const response =
            await axios.put<StrategyTypes.StrategyPutManyResponseBody>(
                `${this.baseUrl}`,
                body
            );
        const responseData = StrategyTypes.StrategyPutManyResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async putSingle(
        params: StrategyTypes.StrategyPutSingleRequestParams,
        body: StrategyTypes.StrategyPutSingleRequestBody
    ): Promise<StrategyTypes.StrategyPutSingleResponseBodyData> {
        const response =
            await axios.put<StrategyTypes.StrategyPutSingleResponseBody>(
                `${this.baseUrl}/${params.id}`,
                body
            );
        const responseData = StrategyTypes.StrategyPutSingleResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async patchMany(
        body: StrategyTypes.StrategyPatchManyRequestBody
    ): Promise<StrategyTypes.StrategyPatchManyResponseBodyData> {
        const response =
            await axios.patch<StrategyTypes.StrategyPatchManyResponseBody>(
                `${this.baseUrl}`,
                body
            );
        const responseData = StrategyTypes.StrategyPatchManyResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async patchSingle(
        params: StrategyTypes.StrategyPatchSingleRequestParams,
        body: StrategyTypes.StrategyPatchSingleRequestBody
    ): Promise<StrategyTypes.StrategyPatchSingleResponseBodyData> {
        const response =
            await axios.patch<StrategyTypes.StrategyPatchSingleResponseBody>(
                `${this.baseUrl}/${params.id}`,
                body
            );
        const responseData =
            StrategyTypes.StrategyPatchSingleResponseBodyFromRaw(response.data);
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async deleteMany(
        query: StrategyTypes.StrategyDeleteManyRequestQuery
    ): Promise<StrategyTypes.StrategyDeleteManyResponseBodyData> {
        const response =
            await axios.delete<StrategyTypes.StrategyDeleteManyResponseBody>(
                `${this.baseUrl}/?${new URLSearchParams(
                    Object.entries(query)
                ).toString()}`
            );
        const responseData =
            StrategyTypes.StrategyDeleteManyResponseBodyFromRaw(response.data);
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async deleteSingle(
        params: StrategyTypes.StrategyDeleteSingleRequestParams
    ): Promise<StrategyTypes.StrategyDeleteSingleResponseBodyData> {
        const response =
            await axios.delete<StrategyTypes.StrategyDeleteSingleResponseBody>(
                `${this.baseUrl}/${params.id}`
            );
        const responseData =
            StrategyTypes.StrategyDeleteSingleResponseBodyFromRaw(
                response.data
            );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
}

export class OrderImpl implements Order {
    constructor(public readonly baseUrl: string) {}

    async getMany(
        query: OrderTypes.OrderGetManyRequestQuery
    ): Promise<OrderTypes.OrderGetManyResponseBodyData> {
        const response = await axios.get<OrderTypes.OrderGetManyResponseBody>(
            `${this.baseUrl}/?${new URLSearchParams(
                Object.entries(query)
            ).toString()}`
        );
        const responseData = OrderTypes.OrderGetManyResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async getSingle(
        params: OrderTypes.OrderGetSingleRequestParams
    ): Promise<OrderTypes.OrderGetSingleResponseBodyData> {
        const response = await axios.get<OrderTypes.OrderGetSingleResponseBody>(
            `${this.baseUrl}/${params.id}`
        );
        const responseData = OrderTypes.OrderGetSingleResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async postMany(
        body: OrderTypes.OrderPostManyRequestBody
    ): Promise<OrderTypes.OrderPostManyResponseBodyData> {
        const response = await axios.post<OrderTypes.OrderPostManyResponseBody>(
            `${this.baseUrl}`,
            body
        );
        const responseData = OrderTypes.OrderPostManyResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async putMany(
        body: OrderTypes.OrderPostManyRequestBody
    ): Promise<OrderTypes.OrderPutManyResponseBodyData> {
        const response = await axios.put<OrderTypes.OrderPutManyResponseBody>(
            `${this.baseUrl}`,
            body
        );
        const responseData = OrderTypes.OrderPutManyResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async putSingle(
        params: OrderTypes.OrderPutSingleRequestParams,
        body: OrderTypes.OrderPutSingleRequestBody
    ): Promise<OrderTypes.OrderPutSingleResponseBodyData> {
        const response = await axios.put<OrderTypes.OrderPutSingleResponseBody>(
            `${this.baseUrl}/${params.id}`,
            body
        );
        const responseData = OrderTypes.OrderPutSingleResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async patchMany(
        body: OrderTypes.OrderPatchManyRequestBody
    ): Promise<OrderTypes.OrderPatchManyResponseBodyData> {
        const response =
            await axios.patch<OrderTypes.OrderPatchManyResponseBody>(
                `${this.baseUrl}`,
                body
            );
        const responseData = OrderTypes.OrderPatchManyResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async patchSingle(
        params: OrderTypes.OrderPatchSingleRequestParams,
        body: OrderTypes.OrderPatchSingleRequestBody
    ): Promise<OrderTypes.OrderPatchSingleResponseBodyData> {
        const response =
            await axios.patch<OrderTypes.OrderPatchSingleResponseBody>(
                `${this.baseUrl}/${params.id}`,
                body
            );
        const responseData = OrderTypes.OrderPatchSingleResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async deleteMany(
        query: OrderTypes.OrderDeleteManyRequestQuery
    ): Promise<OrderTypes.OrderDeleteManyResponseBodyData> {
        const response =
            await axios.delete<OrderTypes.OrderDeleteManyResponseBody>(
                `${this.baseUrl}/?${new URLSearchParams(
                    Object.entries(query)
                ).toString()}`
            );
        const responseData = OrderTypes.OrderDeleteManyResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async deleteSingle(
        params: OrderTypes.OrderDeleteSingleRequestParams
    ): Promise<OrderTypes.OrderDeleteSingleResponseBodyData> {
        const response =
            await axios.delete<OrderTypes.OrderDeleteSingleResponseBody>(
                `${this.baseUrl}/${params.id}`
            );
        const responseData = OrderTypes.OrderDeleteSingleResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
}

export class PositionImpl implements Position {
    constructor(public readonly baseUrl: string) {}

    async getMany(
        query: PositionTypes.PositionGetManyRequestQuery
    ): Promise<PositionTypes.PositionGetManyResponseBodyData> {
        const response =
            await axios.get<PositionTypes.PositionGetManyResponseBody>(
                `${this.baseUrl}/?${new URLSearchParams(
                    Object.entries(query)
                ).toString()}`
            );
        const responseData = PositionTypes.PositionGetManyResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async getSingle(
        params: PositionTypes.PositionGetSingleRequestParams
    ): Promise<PositionTypes.PositionGetSingleResponseBodyData> {
        const response =
            await axios.get<PositionTypes.PositionGetSingleResponseBody>(
                `${this.baseUrl}/${params.id}`
            );
        const responseData = PositionTypes.PositionGetSingleResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async postMany(
        body: PositionTypes.PositionPostManyRequestBody
    ): Promise<PositionTypes.PositionPostManyResponseBodyData> {
        const response =
            await axios.post<PositionTypes.PositionPostManyResponseBody>(
                `${this.baseUrl}`,
                body
            );
        const responseData = PositionTypes.PositionPostManyResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async putMany(
        body: PositionTypes.PositionPostManyRequestBody
    ): Promise<PositionTypes.PositionPutManyResponseBodyData> {
        const response =
            await axios.put<PositionTypes.PositionPutManyResponseBody>(
                `${this.baseUrl}`,
                body
            );
        const responseData = PositionTypes.PositionPutManyResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async putSingle(
        params: PositionTypes.PositionPutSingleRequestParams,
        body: PositionTypes.PositionPutSingleRequestBody
    ): Promise<PositionTypes.PositionPutSingleResponseBodyData> {
        const response =
            await axios.put<PositionTypes.PositionPutSingleResponseBody>(
                `${this.baseUrl}/${params.id}`,
                body
            );
        const responseData = PositionTypes.PositionPutSingleResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async patchMany(
        body: PositionTypes.PositionPatchManyRequestBody
    ): Promise<PositionTypes.PositionPatchManyResponseBodyData> {
        const response =
            await axios.patch<PositionTypes.PositionPatchManyResponseBody>(
                `${this.baseUrl}`,
                body
            );
        const responseData = PositionTypes.PositionPatchManyResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async patchSingle(
        params: PositionTypes.PositionPatchSingleRequestParams,
        body: PositionTypes.PositionPatchSingleRequestBody
    ): Promise<PositionTypes.PositionPatchSingleResponseBodyData> {
        const response =
            await axios.patch<PositionTypes.PositionPatchSingleResponseBody>(
                `${this.baseUrl}/${params.id}`,
                body
            );
        const responseData =
            PositionTypes.PositionPatchSingleResponseBodyFromRaw(response.data);
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async deleteMany(
        query: PositionTypes.PositionDeleteManyRequestQuery
    ): Promise<PositionTypes.PositionDeleteManyResponseBodyData> {
        const response =
            await axios.delete<PositionTypes.PositionDeleteManyResponseBody>(
                `${this.baseUrl}/?${new URLSearchParams(
                    Object.entries(query)
                ).toString()}`
            );
        const responseData =
            PositionTypes.PositionDeleteManyResponseBodyFromRaw(response.data);
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async deleteSingle(
        params: PositionTypes.PositionDeleteSingleRequestParams
    ): Promise<PositionTypes.PositionDeleteSingleResponseBodyData> {
        const response =
            await axios.delete<PositionTypes.PositionDeleteSingleResponseBody>(
                `${this.baseUrl}/${params.id}`
            );
        const responseData =
            PositionTypes.PositionDeleteSingleResponseBodyFromRaw(
                response.data
            );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
}

export class StrategyTemplateSeaDogDiscountSchemeImpl
    implements StrategyTemplateSeaDogDiscountScheme
{
    constructor(public readonly baseUrl: string) {}

    async getMany(
        query: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetManyRequestQuery
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetManyResponseBodyData> {
        const response =
            await axios.get<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetManyResponseBody>(
                `${this.baseUrl}/?${new URLSearchParams(
                    Object.entries(query)
                ).toString()}`
            );
        const responseData =
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetManyResponseBodyFromRaw(
                response.data
            );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async getSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetSingleRequestParams
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetSingleResponseBodyData> {
        const response =
            await axios.get<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetSingleResponseBody>(
                `${this.baseUrl}/${params.id}`
            );
        const responseData =
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetSingleResponseBodyFromRaw(
                response.data
            );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async postMany(
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyResponseBodyData> {
        const response =
            await axios.post<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyResponseBody>(
                `${this.baseUrl}`,
                body
            );
        const responseData =
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyResponseBodyFromRaw(
                response.data
            );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async putMany(
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutManyResponseBodyData> {
        const response =
            await axios.put<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutManyResponseBody>(
                `${this.baseUrl}`,
                body
            );
        const responseData =
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutManyResponseBodyFromRaw(
                response.data
            );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async putSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutSingleRequestParams,
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutSingleRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutSingleResponseBodyData> {
        const response =
            await axios.put<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutSingleResponseBody>(
                `${this.baseUrl}/${params.id}`,
                body
            );
        const responseData =
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutSingleResponseBodyFromRaw(
                response.data
            );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async patchMany(
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchManyRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchManyResponseBodyData> {
        const response =
            await axios.patch<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchManyResponseBody>(
                `${this.baseUrl}`,
                body
            );
        const responseData =
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchManyResponseBodyFromRaw(
                response.data
            );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async patchSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchSingleRequestParams,
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchSingleRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchSingleResponseBodyData> {
        const response =
            await axios.patch<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchSingleResponseBody>(
                `${this.baseUrl}/${params.id}`,
                body
            );
        const responseData =
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchSingleResponseBodyFromRaw(
                response.data
            );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async deleteMany(
        query: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteManyRequestQuery
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteManyResponseBodyData> {
        const response =
            await axios.delete<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteManyResponseBody>(
                `${this.baseUrl}/?${new URLSearchParams(
                    Object.entries(query)
                ).toString()}`
            );
        const responseData =
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteManyResponseBodyFromRaw(
                response.data
            );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
    async deleteSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteSingleRequestParams
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteSingleResponseBodyData> {
        const response =
            await axios.delete<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteSingleResponseBody>(
                `${this.baseUrl}/${params.id}`
            );
        const responseData =
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteSingleResponseBodyFromRaw(
                response.data
            );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData.data;
    }
}

export class ClientImpl implements Client {
    constructor(public readonly baseUrl: string) {}

    symbol(): Symbol {
        return new SymbolImpl(`${this.baseUrl}/symbol`);
    }
    strategy(): Strategy {
        return new StrategyImpl(`${this.baseUrl}/strategy`);
    }
    order(): Order {
        return new OrderImpl(`${this.baseUrl}/order`);
    }
    position(): Position {
        return new PositionImpl(`${this.baseUrl}/position`);
    }
    strategyTemplateSeaDogDiscountScheme(): StrategyTemplateSeaDogDiscountScheme {
        return new StrategyTemplateSeaDogDiscountSchemeImpl(
            `${this.baseUrl}/strategyTemplate/seaDogDiscountScheme`
        );
    }
}
