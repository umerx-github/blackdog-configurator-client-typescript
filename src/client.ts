import {
    Symbol as SymbolTypes,
    Strategy as StrategyTypes,
    Order as OrderTypes,
    Position as PositionTypes,
    StrategyTemplateSeaDogDiscountScheme as StrategyTemplateSeaDogDiscountSchemeTypes,
} from '@umerx/umerx-blackdog-configurator-types-typescript';
import { URLSearchParams } from 'url';
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
    constructor(public readonly baseUrl: string) {}

    async getMany(
        query: SymbolTypes.SymbolGetManyRequestQuery
    ): Promise<SymbolTypes.SymbolGetManyResponseBody> {
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
        return responseData;
    }
    async getSingle(
        params: SymbolTypes.SymbolGetSingleRequestParams
    ): Promise<SymbolTypes.SymbolGetSingleResponseBody> {
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
        return responseData;
    }
    async postMany(
        body: SymbolTypes.SymbolPostManyRequestBody
    ): Promise<SymbolTypes.SymbolPostManyResponseBody> {
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
        return responseData;
    }
    async putMany(
        body: SymbolTypes.SymbolPostManyRequestBody
    ): Promise<SymbolTypes.SymbolPutManyResponseBody> {
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
        return responseData;
    }
    async putSingle(
        params: SymbolTypes.SymbolPutSingleRequestParams,
        body: SymbolTypes.SymbolPutSingleRequestBody
    ): Promise<SymbolTypes.SymbolPutSingleResponseBody> {
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
        return responseData;
    }
    async patchMany(
        body: SymbolTypes.SymbolPatchManyRequestBody
    ): Promise<SymbolTypes.SymbolPatchManyResponseBody> {
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
        return responseData;
    }
    async patchSingle(
        params: SymbolTypes.SymbolPatchSingleRequestParams,
        body: SymbolTypes.SymbolPatchSingleRequestBody
    ): Promise<SymbolTypes.SymbolPatchSingleResponseBody> {
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
        return responseData;
    }
    async deleteMany(
        query: SymbolTypes.SymbolDeleteManyRequestQuery
    ): Promise<SymbolTypes.SymbolDeleteManyResponseBody> {
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
        return responseData;
    }
    async deleteSingle(
        params: SymbolTypes.SymbolDeleteSingleRequestParams
    ): Promise<SymbolTypes.SymbolDeleteSingleResponseBody> {
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
        return responseData;
    }
}

export class StrategyImpl implements Strategy {
    constructor(public readonly baseUrl: string) {}

    async getMany(
        query: StrategyTypes.StrategyGetManyRequestQuery
    ): Promise<StrategyTypes.StrategyGetManyResponseBody> {
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
        return responseData;
    }
    async getSingle(
        params: StrategyTypes.StrategyGetSingleRequestParams
    ): Promise<StrategyTypes.StrategyGetSingleResponseBody> {
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
        return responseData;
    }
    async postMany(
        body: StrategyTypes.StrategyPostManyRequestBody
    ): Promise<StrategyTypes.StrategyPostManyResponseBody> {
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
        return responseData;
    }
    async putMany(
        body: StrategyTypes.StrategyPostManyRequestBody
    ): Promise<StrategyTypes.StrategyPutManyResponseBody> {
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
        return responseData;
    }
    async putSingle(
        params: StrategyTypes.StrategyPutSingleRequestParams,
        body: StrategyTypes.StrategyPutSingleRequestBody
    ): Promise<StrategyTypes.StrategyPutSingleResponseBody> {
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
        return responseData;
    }
    async patchMany(
        body: StrategyTypes.StrategyPatchManyRequestBody
    ): Promise<StrategyTypes.StrategyPatchManyResponseBody> {
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
        return responseData;
    }
    async patchSingle(
        params: StrategyTypes.StrategyPatchSingleRequestParams,
        body: StrategyTypes.StrategyPatchSingleRequestBody
    ): Promise<StrategyTypes.StrategyPatchSingleResponseBody> {
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
        return responseData;
    }
    async deleteMany(
        query: StrategyTypes.StrategyDeleteManyRequestQuery
    ): Promise<StrategyTypes.StrategyDeleteManyResponseBody> {
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
        return responseData;
    }
    async deleteSingle(
        params: StrategyTypes.StrategyDeleteSingleRequestParams
    ): Promise<StrategyTypes.StrategyDeleteSingleResponseBody> {
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
        return responseData;
    }
}

export class OrderImpl implements Order {
    constructor(public readonly baseUrl: string) {}

    async getMany(
        query: OrderTypes.OrderGetManyRequestQuery
    ): Promise<OrderTypes.OrderGetManyResponseBody> {
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
        return responseData;
    }
    async getSingle(
        params: OrderTypes.OrderGetSingleRequestParams
    ): Promise<OrderTypes.OrderGetSingleResponseBody> {
        const response = await axios.get<OrderTypes.OrderGetSingleResponseBody>(
            `${this.baseUrl}/${params.id}`
        );
        const responseData = OrderTypes.OrderGetSingleResponseBodyFromRaw(
            response.data
        );
        if (responseData.status !== 'success') {
            throw new ClientResponseError(responseData.message);
        }
        return responseData;
    }
    async postMany(
        body: OrderTypes.OrderPostManyRequestBody
    ): Promise<OrderTypes.OrderPostManyResponseBody> {
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
        return responseData;
    }
    async putMany(
        body: OrderTypes.OrderPostManyRequestBody
    ): Promise<OrderTypes.OrderPutManyResponseBody> {
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
        return responseData;
    }
    async putSingle(
        params: OrderTypes.OrderPutSingleRequestParams,
        body: OrderTypes.OrderPutSingleRequestBody
    ): Promise<OrderTypes.OrderPutSingleResponseBody> {
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
        return responseData;
    }
    async patchMany(
        body: OrderTypes.OrderPatchManyRequestBody
    ): Promise<OrderTypes.OrderPatchManyResponseBody> {
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
        return responseData;
    }
    async patchSingle(
        params: OrderTypes.OrderPatchSingleRequestParams,
        body: OrderTypes.OrderPatchSingleRequestBody
    ): Promise<OrderTypes.OrderPatchSingleResponseBody> {
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
        return responseData;
    }
    async deleteMany(
        query: OrderTypes.OrderDeleteManyRequestQuery
    ): Promise<OrderTypes.OrderDeleteManyResponseBody> {
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
        return responseData;
    }
    async deleteSingle(
        params: OrderTypes.OrderDeleteSingleRequestParams
    ): Promise<OrderTypes.OrderDeleteSingleResponseBody> {
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
        return responseData;
    }
}

export class PositionImpl implements Position {
    constructor(public readonly baseUrl: string) {}

    async getMany(
        query: PositionTypes.PositionGetManyRequestQuery
    ): Promise<PositionTypes.PositionGetManyResponseBody> {
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
        return responseData;
    }
    async getSingle(
        params: PositionTypes.PositionGetSingleRequestParams
    ): Promise<PositionTypes.PositionGetSingleResponseBody> {
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
        return responseData;
    }
    async postMany(
        body: PositionTypes.PositionPostManyRequestBody
    ): Promise<PositionTypes.PositionPostManyResponseBody> {
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
        return responseData;
    }
    async putMany(
        body: PositionTypes.PositionPostManyRequestBody
    ): Promise<PositionTypes.PositionPutManyResponseBody> {
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
        return responseData;
    }
    async putSingle(
        params: PositionTypes.PositionPutSingleRequestParams,
        body: PositionTypes.PositionPutSingleRequestBody
    ): Promise<PositionTypes.PositionPutSingleResponseBody> {
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
        return responseData;
    }
    async patchMany(
        body: PositionTypes.PositionPatchManyRequestBody
    ): Promise<PositionTypes.PositionPatchManyResponseBody> {
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
        return responseData;
    }
    async patchSingle(
        params: PositionTypes.PositionPatchSingleRequestParams,
        body: PositionTypes.PositionPatchSingleRequestBody
    ): Promise<PositionTypes.PositionPatchSingleResponseBody> {
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
        return responseData;
    }
    async deleteMany(
        query: PositionTypes.PositionDeleteManyRequestQuery
    ): Promise<PositionTypes.PositionDeleteManyResponseBody> {
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
        return responseData;
    }
    async deleteSingle(
        params: PositionTypes.PositionDeleteSingleRequestParams
    ): Promise<PositionTypes.PositionDeleteSingleResponseBody> {
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
        return responseData;
    }
}

export class StrategyTemplateSeaDogDiscountSchemeImpl
    implements StrategyTemplateSeaDogDiscountScheme
{
    constructor(public readonly baseUrl: string) {}

    async getMany(
        query: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetManyRequestQuery
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetManyResponseBody> {
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
        return responseData;
    }
    async getSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetSingleRequestParams
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetSingleResponseBody> {
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
        return responseData;
    }
    async postMany(
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyResponseBody> {
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
        return responseData;
    }
    async putMany(
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutManyResponseBody> {
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
        return responseData;
    }
    async putSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutSingleRequestParams,
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutSingleRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutSingleResponseBody> {
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
        return responseData;
    }
    async patchMany(
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchManyRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchManyResponseBody> {
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
        return responseData;
    }
    async patchSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchSingleRequestParams,
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchSingleRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchSingleResponseBody> {
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
        return responseData;
    }
    async deleteMany(
        query: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteManyRequestQuery
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteManyResponseBody> {
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
        return responseData;
    }
    async deleteSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteSingleRequestParams
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteSingleResponseBody> {
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
        return responseData;
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
