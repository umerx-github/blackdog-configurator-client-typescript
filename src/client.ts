import {
    Symbol as SymbolTypes,
    Strategy as StrategyTypes,
    StrategyLog as StrategyLogTypes,
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
    ): Promise<SymbolTypes.SymbolGetManyResponseBody>;
    getSingle(
        params: SymbolTypes.SymbolGetSingleRequestParams
    ): Promise<SymbolTypes.SymbolGetSingleResponseBody>;
    postMany(
        body: SymbolTypes.SymbolPostManyRequestBody
    ): Promise<SymbolTypes.SymbolPostManyResponseBody>;
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

export interface StrategyLog {
    getMany(
        query: StrategyLogTypes.StrategyLogGetManyRequestQuery
    ): Promise<StrategyLogTypes.StrategyLogGetManyResponseBody>;
    getSingle(
        params: StrategyLogTypes.StrategyLogGetSingleRequestParams
    ): Promise<StrategyLogTypes.StrategyLogGetSingleResponseBody>;
    postMany(
        body: StrategyLogTypes.StrategyLogPostManyRequestBody
    ): Promise<StrategyLogTypes.StrategyLogPostManyResponseBody>;
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
    fillSingle(
        params: OrderTypes.OrderFillPostSingleRequestParams
    ): Promise<OrderTypes.OrderFillPostSingleResponseBody>;
    cancelSingle(
        params: OrderTypes.OrderCancelPostSingleRequestParams
    ): Promise<OrderTypes.OrderCancelPostSingleResponseBody>;
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
    strategy(): Strategy;
    order(): Order;
    position(): Position;
    strategyTemplateSeaDogDiscountScheme(): StrategyTemplateSeaDogDiscountScheme;
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
        const responseBody = SymbolTypes.SymbolGetManyResponseBodyFromRaw(
            response.data
        );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
    }
    async getSingle(
        params: SymbolTypes.SymbolGetSingleRequestParams
    ): Promise<SymbolTypes.SymbolGetSingleResponseBody> {
        const response =
            await axios.get<SymbolTypes.SymbolGetSingleResponseBody>(
                `${this.baseUrl}/${params.id}`
            );
        const responseBody = SymbolTypes.SymbolGetSingleResponseBodyFromRaw(
            response.data
        );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
    }
    async postMany(
        body: SymbolTypes.SymbolPostManyRequestBody
    ): Promise<SymbolTypes.SymbolPostManyResponseBody> {
        const response =
            await axios.post<SymbolTypes.SymbolPostManyResponseBody>(
                `${this.baseUrl}`,
                body
            );
        const responseBody = SymbolTypes.SymbolPostManyResponseBodyFromRaw(
            response.data
        );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
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
        const responseBody = StrategyTypes.StrategyGetManyResponseBodyFromRaw(
            response.data
        );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
    }
    async getSingle(
        params: StrategyTypes.StrategyGetSingleRequestParams
    ): Promise<StrategyTypes.StrategyGetSingleResponseBody> {
        const response =
            await axios.get<StrategyTypes.StrategyGetSingleResponseBody>(
                `${this.baseUrl}/${params.id}`
            );
        const responseBody = StrategyTypes.StrategyGetSingleResponseBodyFromRaw(
            response.data
        );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
    }
    async postMany(
        body: StrategyTypes.StrategyPostManyRequestBody
    ): Promise<StrategyTypes.StrategyPostManyResponseBody> {
        const response =
            await axios.post<StrategyTypes.StrategyPostManyResponseBody>(
                `${this.baseUrl}`,
                body
            );
        const responseBody = StrategyTypes.StrategyPostManyResponseBodyFromRaw(
            response.data
        );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
    }
    async putMany(
        body: StrategyTypes.StrategyPostManyRequestBody
    ): Promise<StrategyTypes.StrategyPutManyResponseBody> {
        const response =
            await axios.put<StrategyTypes.StrategyPutManyResponseBody>(
                `${this.baseUrl}`,
                body
            );
        const responseBody = StrategyTypes.StrategyPutManyResponseBodyFromRaw(
            response.data
        );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
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
        const responseBody = StrategyTypes.StrategyPutSingleResponseBodyFromRaw(
            response.data
        );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
    }
    async patchMany(
        body: StrategyTypes.StrategyPatchManyRequestBody
    ): Promise<StrategyTypes.StrategyPatchManyResponseBody> {
        const response =
            await axios.patch<StrategyTypes.StrategyPatchManyResponseBody>(
                `${this.baseUrl}`,
                body
            );
        const responseBody = StrategyTypes.StrategyPatchManyResponseBodyFromRaw(
            response.data
        );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
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
        const responseBody =
            StrategyTypes.StrategyPatchSingleResponseBodyFromRaw(response.data);
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
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
        const responseBody =
            StrategyTypes.StrategyDeleteManyResponseBodyFromRaw(response.data);
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
    }
    async deleteSingle(
        params: StrategyTypes.StrategyDeleteSingleRequestParams
    ): Promise<StrategyTypes.StrategyDeleteSingleResponseBody> {
        const response =
            await axios.delete<StrategyTypes.StrategyDeleteSingleResponseBody>(
                `${this.baseUrl}/${params.id}`
            );
        const responseBody =
            StrategyTypes.StrategyDeleteSingleResponseBodyFromRaw(
                response.data
            );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
    }
}

export class StrategyLogImpl implements StrategyLog {
    constructor(public readonly baseUrl: string) {}

    async getMany(
        query: StrategyLogTypes.StrategyLogGetManyRequestQuery
    ): Promise<StrategyLogTypes.StrategyLogGetManyResponseBody> {
        const response =
            await axios.get<StrategyLogTypes.StrategyLogGetManyResponseBody>(
                `${this.baseUrl}/?${new URLSearchParams(
                    Object.entries(query)
                ).toString()}`
            );
        const responseBody =
            StrategyLogTypes.StrategyLogGetManyResponseBodyFromRaw(
                response.data
            );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
    }
    async getSingle(
        params: StrategyLogTypes.StrategyLogGetSingleRequestParams
    ): Promise<StrategyLogTypes.StrategyLogGetSingleResponseBody> {
        const response =
            await axios.get<StrategyLogTypes.StrategyLogGetSingleResponseBody>(
                `${this.baseUrl}/${params.id}`
            );
        const responseBody =
            StrategyLogTypes.StrategyLogGetSingleResponseBodyFromRaw(
                response.data
            );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
    }
    async postMany(
        body: StrategyLogTypes.StrategyLogPostManyRequestBody
    ): Promise<StrategyLogTypes.StrategyLogPostManyResponseBody> {
        const response =
            await axios.post<StrategyLogTypes.StrategyLogPostManyResponseBody>(
                `${this.baseUrl}`,
                body
            );
        const responseBody =
            StrategyLogTypes.StrategyLogPostManyResponseBodyFromRaw(
                response.data
            );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
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
        const responseBody = OrderTypes.OrderGetManyResponseBodyFromRaw(
            response.data
        );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
    }
    async getSingle(
        params: OrderTypes.OrderGetSingleRequestParams
    ): Promise<OrderTypes.OrderGetSingleResponseBody> {
        const response = await axios.get<OrderTypes.OrderGetSingleResponseBody>(
            `${this.baseUrl}/${params.id}`
        );
        const responseBody = OrderTypes.OrderGetSingleResponseBodyFromRaw(
            response.data
        );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
    }
    async postMany(
        body: OrderTypes.OrderPostManyRequestBody
    ): Promise<OrderTypes.OrderPostManyResponseBody> {
        const response = await axios.post<OrderTypes.OrderPostManyResponseBody>(
            `${this.baseUrl}`,
            body
        );
        const responseBody = OrderTypes.OrderPostManyResponseBodyFromRaw(
            response.data
        );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
    }
    async fillSingle(
        params: OrderTypes.OrderFillPostSingleRequestParams
    ): Promise<OrderTypes.OrderFillPostSingleResponseBody> {
        const response =
            await axios.post<OrderTypes.OrderFillPostSingleResponseBody>(
                `${this.baseUrl}/${params.id}/fill`
            );
        return response.data;
    }
    async cancelSingle(
        params: OrderTypes.OrderCancelPostSingleRequestParams
    ): Promise<OrderTypes.OrderCancelPostSingleResponseBody> {
        const response =
            await axios.post<OrderTypes.OrderCancelPostSingleResponseBody>(
                `${this.baseUrl}/${params.id}/cancel`
            );
        return response.data;
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
        const responseBody = PositionTypes.PositionGetManyResponseBodyFromRaw(
            response.data
        );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
    }
    async getSingle(
        params: PositionTypes.PositionGetSingleRequestParams
    ): Promise<PositionTypes.PositionGetSingleResponseBody> {
        const response =
            await axios.get<PositionTypes.PositionGetSingleResponseBody>(
                `${this.baseUrl}/${params.id}`
            );
        const responseBody = PositionTypes.PositionGetSingleResponseBodyFromRaw(
            response.data
        );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
    }
    async postMany(
        body: PositionTypes.PositionPostManyRequestBody
    ): Promise<PositionTypes.PositionPostManyResponseBody> {
        const response =
            await axios.post<PositionTypes.PositionPostManyResponseBody>(
                `${this.baseUrl}`,
                body
            );
        const responseBody = PositionTypes.PositionPostManyResponseBodyFromRaw(
            response.data
        );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
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
        const responseBody =
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetManyResponseBodyFromRaw(
                response.data
            );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
    }
    async getSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetSingleRequestParams
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetSingleResponseBody> {
        const response =
            await axios.get<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetSingleResponseBody>(
                `${this.baseUrl}/${params.id}`
            );
        const responseBody =
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetSingleResponseBodyFromRaw(
                response.data
            );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
    }
    async postMany(
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyResponseBody> {
        const response =
            await axios.post<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyResponseBody>(
                `${this.baseUrl}`,
                body
            );
        const responseBody =
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyResponseBodyFromRaw(
                response.data
            );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
    }
    async putMany(
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutManyResponseBody> {
        const response =
            await axios.put<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutManyResponseBody>(
                `${this.baseUrl}`,
                body
            );
        const responseBody =
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutManyResponseBodyFromRaw(
                response.data
            );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
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
        const responseBody =
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutSingleResponseBodyFromRaw(
                response.data
            );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
    }
    async patchMany(
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchManyRequestBody
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchManyResponseBody> {
        const response =
            await axios.patch<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchManyResponseBody>(
                `${this.baseUrl}`,
                body
            );
        const responseBody =
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchManyResponseBodyFromRaw(
                response.data
            );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
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
        const responseBody =
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchSingleResponseBodyFromRaw(
                response.data
            );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
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
        const responseBody =
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteManyResponseBodyFromRaw(
                response.data
            );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
    }
    async deleteSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteSingleRequestParams
    ): Promise<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteSingleResponseBody> {
        const response =
            await axios.delete<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteSingleResponseBody>(
                `${this.baseUrl}/${params.id}`
            );
        const responseBody =
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteSingleResponseBodyFromRaw(
                response.data
            );
        if (responseBody.status !== 'success') {
            throw new ClientResponseError(responseBody.message);
        }
        return responseBody;
    }
}

/**
 * @todo Implement a "Requestor" interface. Requestor interface should either be instantiated by client or be passed to the client constructor. The client should pass the Requestor to the client methods.
 */
export class ClientImpl implements Client {
    constructor(public readonly baseUrl: string) {}

    symbol(): Symbol {
        return new SymbolImpl(`${this.baseUrl}/symbol`);
    }
    strategy(): Strategy {
        return new StrategyImpl(`${this.baseUrl}/strategy`);
    }
    strategyLog(): StrategyLog {
        return new StrategyLogImpl(`${this.baseUrl}/strategyLog`);
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
