import {
    Response as ResponseTypes,
    Symbol as SymbolTypes,
    Strategy as StrategyTypes,
    StrategyLog as StrategyLogTypes,
    StrategyValue as StrategyValueTypes,
    Order as OrderTypes,
    Position as PositionTypes,
    StrategyTemplateSeaDogDiscountScheme as StrategyTemplateSeaDogDiscountSchemeTypes,
} from '@umerx/umerx-blackdog-configurator-types-typescript';
import {
    ResponseBaseError,
    ResponseBaseSuccess,
    ResponseBaseSuccessPaginated,
} from '@umerx/umerx-blackdog-configurator-types-typescript/build/src/response.js';
import axios, { AxiosError } from 'axios';

export class ClientResponseError extends Error {
    statusCode: number;
    responseBody: ResponseBaseError;
    constructor(
        message: string,
        statusCode: number,
        responseBody: ResponseBaseError
    ) {
        super(message);
        this.name = 'ClientResponseError';
        this.statusCode = statusCode;
        this.responseBody = responseBody;
    }
}

async function validateResponse<T>(func: () => Promise<T>): Promise<T> {
    try {
        return await func();
    } catch (e) {
        if (e instanceof AxiosError && undefined !== e?.response?.status) {
            const errorResponse = ResponseTypes.ResponseBaseErrorFromRaw(
                e?.response?.data
            );
            e = new ClientResponseError(
                errorResponse.message,
                e?.response?.status,
                errorResponse
            );
        }
        throw e;
    }
}

export interface Symbol {
    getMany(
        query: SymbolTypes.SymbolGetManyRequestQuery
    ): Promise<
        ResponseBaseSuccess<SymbolTypes.SymbolResponseBodyDataInstance[]>
    >;
    getSingle(
        params: SymbolTypes.SymbolGetSingleRequestParams
    ): Promise<ResponseBaseSuccess<SymbolTypes.SymbolResponseBodyDataInstance>>;
    postMany(
        body: SymbolTypes.SymbolPostManyRequestBody
    ): Promise<
        ResponseBaseSuccess<SymbolTypes.SymbolResponseBodyDataInstance[]>
    >;
}

export interface Strategy {
    getMany(
        query: StrategyTypes.StrategyGetManyRequestQuery
    ): Promise<
        ResponseBaseSuccess<StrategyTypes.StrategyResponseBodyDataInstance[]>
    >;
    getSingle(
        params: StrategyTypes.StrategyGetSingleRequestParams
    ): Promise<
        ResponseBaseSuccess<StrategyTypes.StrategyResponseBodyDataInstance>
    >;
    postMany(
        body: StrategyTypes.StrategyPostManyRequestBody
    ): Promise<
        ResponseBaseSuccess<StrategyTypes.StrategyResponseBodyDataInstance[]>
    >;
    putMany(
        body: StrategyTypes.StrategyPostManyRequestBody
    ): Promise<
        ResponseBaseSuccess<StrategyTypes.StrategyResponseBodyDataInstance[]>
    >;
    putSingle(
        params: StrategyTypes.StrategyPutSingleRequestParams,
        body: StrategyTypes.StrategyPutSingleRequestBody
    ): Promise<
        ResponseBaseSuccess<StrategyTypes.StrategyResponseBodyDataInstance>
    >;
    patchMany(
        body: StrategyTypes.StrategyPatchManyRequestBody
    ): Promise<
        ResponseBaseSuccess<StrategyTypes.StrategyResponseBodyDataInstance[]>
    >;
    patchSingle(
        params: StrategyTypes.StrategyPatchSingleRequestParams,
        body: StrategyTypes.StrategyPatchSingleRequestBody
    ): Promise<
        ResponseBaseSuccess<StrategyTypes.StrategyResponseBodyDataInstance>
    >;
    deleteMany(
        query: StrategyTypes.StrategyDeleteManyRequestQuery
    ): Promise<
        ResponseBaseSuccess<StrategyTypes.StrategyResponseBodyDataInstance[]>
    >;
    deleteSingle(
        params: StrategyTypes.StrategyDeleteSingleRequestParams
    ): Promise<
        ResponseBaseSuccess<StrategyTypes.StrategyResponseBodyDataInstance>
    >;
    getAssetsSingle(
        params: StrategyTypes.StrategyAssetsGetSingleRequestParams
    ): Promise<
        ResponseBaseSuccess<StrategyTypes.StrategyAssetsGetSingleResponseBodyDataInstance>
    >;
    getAggregateValues(
        params: StrategyTypes.StrategyAggregateValuesGetManyRequestParams,
        query: StrategyTypes.StrategyAggregateValuesGetManyRequestQuery
    ): Promise<
        ResponseBaseSuccess<
            StrategyTypes.StrategyAggregateValuesGetManyResponseBodyDataInstance[]
        >
    >;
}

export interface StrategyLog {
    getMany(
        query: StrategyLogTypes.StrategyLogGetManyRequestQuery
    ): Promise<
        ResponseBaseSuccessPaginated<
            StrategyLogTypes.StrategyLogResponseBodyDataInstance[]
        >
    >;
    getSingle(
        params: StrategyLogTypes.StrategyLogGetSingleRequestParams
    ): Promise<
        ResponseBaseSuccess<StrategyLogTypes.StrategyLogResponseBodyDataInstance>
    >;
    postMany(
        body: StrategyLogTypes.StrategyLogPostManyRequestBody
    ): Promise<
        ResponseBaseSuccess<
            StrategyLogTypes.StrategyLogResponseBodyDataInstance[]
        >
    >;
}

export interface StrategyValue {
    getMany(
        query: StrategyValueTypes.StrategyValueGetManyRequestQuery
    ): Promise<
        ResponseBaseSuccessPaginated<
            StrategyValueTypes.StrategyValueResponseBodyDataInstance[]
        >
    >;
    getSingle(
        params: StrategyValueTypes.StrategyValueGetSingleRequestParams
    ): Promise<
        ResponseBaseSuccess<StrategyValueTypes.StrategyValueResponseBodyDataInstance>
    >;
    postMany(
        body: StrategyValueTypes.StrategyValuePostManyRequestBody
    ): Promise<
        ResponseBaseSuccess<
            StrategyValueTypes.StrategyValueResponseBodyDataInstance[]
        >
    >;
}

export interface Order {
    getMany(
        query: OrderTypes.OrderGetManyRequestQuery
    ): Promise<ResponseBaseSuccess<OrderTypes.OrderResponseBodyDataInstance[]>>;
    getSingle(
        params: OrderTypes.OrderGetSingleRequestParams
    ): Promise<ResponseBaseSuccess<OrderTypes.OrderResponseBodyDataInstance>>;
    postMany(
        body: OrderTypes.OrderPostManyRequestBody
    ): Promise<ResponseBaseSuccess<OrderTypes.OrderResponseBodyDataInstance[]>>;
    fillSingle(
        params: OrderTypes.OrderFillPostSingleRequestParams
    ): Promise<ResponseBaseSuccess<OrderTypes.OrderResponseBodyDataInstance>>;
    cancelSingle(
        params: OrderTypes.OrderCancelPostSingleRequestParams
    ): Promise<ResponseBaseSuccess<OrderTypes.OrderResponseBodyDataInstance>>;
}

export interface Position {
    getMany(
        query: PositionTypes.PositionGetManyRequestQuery
    ): Promise<
        ResponseBaseSuccess<PositionTypes.PositionResponseBodyDataInstance[]>
    >;
    getSingle(
        params: PositionTypes.PositionGetSingleRequestParams
    ): Promise<
        ResponseBaseSuccess<PositionTypes.PositionResponseBodyDataInstance>
    >;
    postMany(
        body: PositionTypes.PositionPostManyRequestBody
    ): Promise<
        ResponseBaseSuccess<PositionTypes.PositionResponseBodyDataInstance[]>
    >;
}

export interface StrategyTemplateSeaDogDiscountScheme {
    getMany(
        query: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetManyRequestQuery
    ): Promise<
        ResponseBaseSuccess<
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeResponseBodyDataInstance[]
        >
    >;
    getSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetSingleRequestParams
    ): Promise<
        ResponseBaseSuccess<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeResponseBodyDataInstance>
    >;
    postMany(
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyRequestBody
    ): Promise<
        ResponseBaseSuccess<
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeResponseBodyDataInstance[]
        >
    >;
    putMany(
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyRequestBody
    ): Promise<
        ResponseBaseSuccess<
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeResponseBodyDataInstance[]
        >
    >;
    putSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutSingleRequestParams,
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutSingleRequestBody
    ): Promise<
        ResponseBaseSuccess<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeResponseBodyDataInstance>
    >;
    patchMany(
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchManyRequestBody
    ): Promise<
        ResponseBaseSuccess<
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeResponseBodyDataInstance[]
        >
    >;
    patchSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchSingleRequestParams,
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchSingleRequestBody
    ): Promise<
        ResponseBaseSuccess<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeResponseBodyDataInstance>
    >;
    deleteMany(
        query: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteManyRequestQuery
    ): Promise<
        ResponseBaseSuccess<
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeResponseBodyDataInstance[]
        >
    >;
    deleteSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteSingleRequestParams
    ): Promise<
        ResponseBaseSuccess<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeResponseBodyDataInstance>
    >;
}

export interface Client {
    symbol(): Symbol;
    strategy(): Strategy;
    strategyLog(): StrategyLog;
    strategyValue(): StrategyValue;
    order(): Order;
    position(): Position;
    strategyTemplateSeaDogDiscountScheme(): StrategyTemplateSeaDogDiscountScheme;
}

export class SymbolImpl implements Symbol {
    constructor(public readonly baseUrl: string) {}

    async getMany(
        query: SymbolTypes.SymbolGetManyRequestQuery
    ): Promise<
        ResponseBaseSuccess<SymbolTypes.SymbolResponseBodyDataInstance[]>
    > {
        return validateResponse(async () => {
            const response =
                await axios.get<SymbolTypes.SymbolGetManyResponseBody>(
                    `${this.baseUrl}/?${new URLSearchParams(
                        Object.entries(query)
                    ).toString()}`
                );
            const responseBody = SymbolTypes.SymbolGetManyResponseBodyFromRaw(
                response.data
            );
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async getSingle(
        params: SymbolTypes.SymbolGetSingleRequestParams
    ): Promise<
        ResponseBaseSuccess<SymbolTypes.SymbolResponseBodyDataInstance>
    > {
        return validateResponse(async () => {
            const response =
                await axios.get<SymbolTypes.SymbolGetSingleResponseBody>(
                    `${this.baseUrl}/${params.id}`
                );
            const responseBody = SymbolTypes.SymbolGetSingleResponseBodyFromRaw(
                response.data
            );
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async postMany(
        body: SymbolTypes.SymbolPostManyRequestBody
    ): Promise<
        ResponseBaseSuccess<SymbolTypes.SymbolResponseBodyDataInstance[]>
    > {
        return validateResponse(async () => {
            const response =
                await axios.post<SymbolTypes.SymbolPostManyResponseBody>(
                    `${this.baseUrl}`,
                    body
                );
            const responseBody = SymbolTypes.SymbolPostManyResponseBodyFromRaw(
                response.data
            );
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
}

export class StrategyImpl implements Strategy {
    constructor(public readonly baseUrl: string) {}

    async getMany(
        query: StrategyTypes.StrategyGetManyRequestQuery
    ): Promise<
        ResponseBaseSuccess<StrategyTypes.StrategyResponseBodyDataInstance[]>
    > {
        return validateResponse(async () => {
            const response =
                await axios.get<StrategyTypes.StrategyGetManyResponseBody>(
                    `${this.baseUrl}/?${new URLSearchParams(
                        Object.entries(query)
                    ).toString()}`
                );
            const responseBody =
                StrategyTypes.StrategyGetManyResponseBodyFromRaw(response.data);
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async getSingle(
        params: StrategyTypes.StrategyGetSingleRequestParams
    ): Promise<
        ResponseBaseSuccess<StrategyTypes.StrategyResponseBodyDataInstance>
    > {
        return validateResponse(async () => {
            const response =
                await axios.get<StrategyTypes.StrategyGetSingleResponseBody>(
                    `${this.baseUrl}/${params.id}`
                );
            const responseBody =
                StrategyTypes.StrategyGetSingleResponseBodyFromRaw(
                    response.data
                );
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async postMany(
        body: StrategyTypes.StrategyPostManyRequestBody
    ): Promise<
        ResponseBaseSuccess<StrategyTypes.StrategyResponseBodyDataInstance[]>
    > {
        return validateResponse(async () => {
            const response =
                await axios.post<StrategyTypes.StrategyPostManyResponseBody>(
                    `${this.baseUrl}`,
                    body
                );
            const responseBody =
                StrategyTypes.StrategyPostManyResponseBodyFromRaw(
                    response.data
                );
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async putMany(
        body: StrategyTypes.StrategyPostManyRequestBody
    ): Promise<
        ResponseBaseSuccess<StrategyTypes.StrategyResponseBodyDataInstance[]>
    > {
        return validateResponse(async () => {
            const response =
                await axios.put<StrategyTypes.StrategyPutManyResponseBody>(
                    `${this.baseUrl}`,
                    body
                );
            const responseBody =
                StrategyTypes.StrategyPutManyResponseBodyFromRaw(response.data);
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async putSingle(
        params: StrategyTypes.StrategyPutSingleRequestParams,
        body: StrategyTypes.StrategyPutSingleRequestBody
    ): Promise<
        ResponseBaseSuccess<StrategyTypes.StrategyResponseBodyDataInstance>
    > {
        return validateResponse(async () => {
            const response =
                await axios.put<StrategyTypes.StrategyPutSingleResponseBody>(
                    `${this.baseUrl}/${params.id}`,
                    body
                );
            const responseBody =
                StrategyTypes.StrategyPutSingleResponseBodyFromRaw(
                    response.data
                );
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async patchMany(
        body: StrategyTypes.StrategyPatchManyRequestBody
    ): Promise<
        ResponseBaseSuccess<StrategyTypes.StrategyResponseBodyDataInstance[]>
    > {
        return validateResponse(async () => {
            const response =
                await axios.patch<StrategyTypes.StrategyPatchManyResponseBody>(
                    `${this.baseUrl}`,
                    body
                );
            const responseBody =
                StrategyTypes.StrategyPatchManyResponseBodyFromRaw(
                    response.data
                );
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async patchSingle(
        params: StrategyTypes.StrategyPatchSingleRequestParams,
        body: StrategyTypes.StrategyPatchSingleRequestBody
    ): Promise<
        ResponseBaseSuccess<StrategyTypes.StrategyResponseBodyDataInstance>
    > {
        return validateResponse(async () => {
            const response =
                await axios.patch<StrategyTypes.StrategyPatchSingleResponseBody>(
                    `${this.baseUrl}/${params.id}`,
                    body
                );
            const responseBody =
                StrategyTypes.StrategyPatchSingleResponseBodyFromRaw(
                    response.data
                );
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async deleteMany(
        query: StrategyTypes.StrategyDeleteManyRequestQuery
    ): Promise<
        ResponseBaseSuccess<StrategyTypes.StrategyResponseBodyDataInstance[]>
    > {
        return validateResponse(async () => {
            const response =
                await axios.delete<StrategyTypes.StrategyDeleteManyResponseBody>(
                    `${this.baseUrl}/?${new URLSearchParams(
                        Object.entries(query)
                    ).toString()}`
                );
            const responseBody =
                StrategyTypes.StrategyDeleteManyResponseBodyFromRaw(
                    response.data
                );
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async deleteSingle(
        params: StrategyTypes.StrategyDeleteSingleRequestParams
    ): Promise<
        ResponseBaseSuccess<StrategyTypes.StrategyResponseBodyDataInstance>
    > {
        return validateResponse(async () => {
            const response =
                await axios.delete<StrategyTypes.StrategyDeleteSingleResponseBody>(
                    `${this.baseUrl}/${params.id}`
                );
            const responseBody =
                StrategyTypes.StrategyDeleteSingleResponseBodyFromRaw(
                    response.data
                );
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async getAssetsSingle(
        params: StrategyTypes.StrategyAssetsGetSingleRequestParams
    ): Promise<
        ResponseBaseSuccess<StrategyTypes.StrategyAssetsGetSingleResponseBodyDataInstance>
    > {
        return validateResponse(async () => {
            const response =
                await axios.get<StrategyTypes.StrategyAssetsGetSingleResponseBody>(
                    `${this.baseUrl}/${params.id}/assets`
                );
            const responseBody =
                StrategyTypes.StrategyAssetsGetSingleResponseBodyFromRaw(
                    response.data
                );
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async getAggregateValues(
        params: StrategyTypes.StrategyAggregateValuesGetManyRequestParams,
        query: StrategyTypes.StrategyAggregateValuesGetManyRequestQuery
    ): Promise<
        ResponseBaseSuccess<
            StrategyTypes.StrategyAggregateValuesGetManyResponseBodyDataInstance[]
        >
    > {
        return validateResponse(async () => {
            const response =
                await axios.get<StrategyTypes.StrategyAggregateValuesGetManyResponseBody>(
                    `${this.baseUrl}/${
                        params.id
                    }/aggregateValues?${new URLSearchParams(
                        Object.entries(query)
                    ).toString()}`
                );
            const responseBody =
                StrategyTypes.StrategyAggregateValuesGetManyResponseBodyFromRaw(
                    response.data
                );
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
}

export class StrategyLogImpl implements StrategyLog {
    constructor(public readonly baseUrl: string) {}

    async getMany(
        query: StrategyLogTypes.StrategyLogGetManyRequestQuery
    ): Promise<
        ResponseBaseSuccessPaginated<
            StrategyLogTypes.StrategyLogResponseBodyDataInstance[]
        >
    > {
        return validateResponse(async () => {
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
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async getSingle(
        params: StrategyLogTypes.StrategyLogGetSingleRequestParams
    ): Promise<
        ResponseBaseSuccess<StrategyLogTypes.StrategyLogResponseBodyDataInstance>
    > {
        return validateResponse(async () => {
            const response =
                await axios.get<StrategyLogTypes.StrategyLogGetSingleResponseBody>(
                    `${this.baseUrl}/${params.id}`
                );
            const responseBody =
                StrategyLogTypes.StrategyLogGetSingleResponseBodyFromRaw(
                    response.data
                );
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async postMany(
        body: StrategyLogTypes.StrategyLogPostManyRequestBody
    ): Promise<
        ResponseBaseSuccess<
            StrategyLogTypes.StrategyLogResponseBodyDataInstance[]
        >
    > {
        return validateResponse(async () => {
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
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
}

export class StrategyValueImpl implements StrategyValue {
    constructor(public readonly baseUrl: string) {}

    async getMany(
        query: StrategyValueTypes.StrategyValueGetManyRequestQuery
    ): Promise<
        ResponseBaseSuccessPaginated<
            StrategyValueTypes.StrategyValueResponseBodyDataInstance[]
        >
    > {
        return validateResponse(async () => {
            const response =
                await axios.get<StrategyValueTypes.StrategyValueGetManyResponseBody>(
                    `${this.baseUrl}/?${new URLSearchParams(
                        Object.entries(query)
                    ).toString()}`
                );
            const responseBody =
                StrategyValueTypes.StrategyValueGetManyResponseBodyFromRaw(
                    response.data
                );
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async getSingle(
        params: StrategyValueTypes.StrategyValueGetSingleRequestParams
    ): Promise<
        ResponseBaseSuccess<StrategyValueTypes.StrategyValueResponseBodyDataInstance>
    > {
        return validateResponse(async () => {
            const response =
                await axios.get<StrategyValueTypes.StrategyValueGetSingleResponseBody>(
                    `${this.baseUrl}/${params.id}`
                );
            const responseBody =
                StrategyValueTypes.StrategyValueGetSingleResponseBodyFromRaw(
                    response.data
                );
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async postMany(
        body: StrategyValueTypes.StrategyValuePostManyRequestBody
    ): Promise<
        ResponseBaseSuccess<
            StrategyValueTypes.StrategyValueResponseBodyDataInstance[]
        >
    > {
        return validateResponse(async () => {
            const response =
                await axios.post<StrategyValueTypes.StrategyValuePostManyResponseBody>(
                    `${this.baseUrl}`,
                    body
                );
            const responseBody =
                StrategyValueTypes.StrategyValuePostManyResponseBodyFromRaw(
                    response.data
                );
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
}

export class OrderImpl implements Order {
    constructor(public readonly baseUrl: string) {}

    async getMany(
        query: OrderTypes.OrderGetManyRequestQuery
    ): Promise<
        ResponseBaseSuccess<OrderTypes.OrderResponseBodyDataInstance[]>
    > {
        return validateResponse(async () => {
            const response =
                await axios.get<OrderTypes.OrderGetManyResponseBody>(
                    `${this.baseUrl}/?${new URLSearchParams(
                        Object.entries(query)
                    ).toString()}`
                );
            const responseBody = OrderTypes.OrderGetManyResponseBodyFromRaw(
                response.data
            );
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async getSingle(
        params: OrderTypes.OrderGetSingleRequestParams
    ): Promise<ResponseBaseSuccess<OrderTypes.OrderResponseBodyDataInstance>> {
        return validateResponse(async () => {
            const response =
                await axios.get<OrderTypes.OrderGetSingleResponseBody>(
                    `${this.baseUrl}/${params.id}`
                );
            const responseBody = OrderTypes.OrderGetSingleResponseBodyFromRaw(
                response.data
            );
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async postMany(
        body: OrderTypes.OrderPostManyRequestBody
    ): Promise<
        ResponseBaseSuccess<OrderTypes.OrderResponseBodyDataInstance[]>
    > {
        return validateResponse(async () => {
            const response =
                await axios.post<OrderTypes.OrderPostManyResponseBody>(
                    `${this.baseUrl}`,
                    body
                );
            const responseBody = OrderTypes.OrderPostManyResponseBodyFromRaw(
                response.data
            );
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async fillSingle(
        params: OrderTypes.OrderFillPostSingleRequestParams
    ): Promise<ResponseBaseSuccess<OrderTypes.OrderResponseBodyDataInstance>> {
        return validateResponse(async () => {
            const response =
                await axios.post<OrderTypes.OrderFillPostSingleResponseBody>(
                    `${this.baseUrl}/${params.id}/fill`
                );
            const responseBody =
                OrderTypes.OrderFillPostSingleResponseBodyFromRaw(
                    response.data
                );
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async cancelSingle(
        params: OrderTypes.OrderCancelPostSingleRequestParams
    ): Promise<ResponseBaseSuccess<OrderTypes.OrderResponseBodyDataInstance>> {
        return validateResponse(async () => {
            const response =
                await axios.post<OrderTypes.OrderCancelPostSingleResponseBody>(
                    `${this.baseUrl}/${params.id}/cancel`
                );
            const responseBody =
                OrderTypes.OrderCancelPostSingleResponseBodyFromRaw(
                    response.data
                );
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
}

export class PositionImpl implements Position {
    constructor(public readonly baseUrl: string) {}

    async getMany(
        query: PositionTypes.PositionGetManyRequestQuery
    ): Promise<
        ResponseBaseSuccess<PositionTypes.PositionResponseBodyDataInstance[]>
    > {
        return validateResponse(async () => {
            const response =
                await axios.get<PositionTypes.PositionGetManyResponseBody>(
                    `${this.baseUrl}/?${new URLSearchParams(
                        Object.entries(query)
                    ).toString()}`
                );
            const responseBody =
                PositionTypes.PositionGetManyResponseBodyFromRaw(response.data);
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async getSingle(
        params: PositionTypes.PositionGetSingleRequestParams
    ): Promise<
        ResponseBaseSuccess<PositionTypes.PositionResponseBodyDataInstance>
    > {
        return validateResponse(async () => {
            const response =
                await axios.get<PositionTypes.PositionGetSingleResponseBody>(
                    `${this.baseUrl}/${params.id}`
                );
            const responseBody =
                PositionTypes.PositionGetSingleResponseBodyFromRaw(
                    response.data
                );
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async postMany(
        body: PositionTypes.PositionPostManyRequestBody
    ): Promise<
        ResponseBaseSuccess<PositionTypes.PositionResponseBodyDataInstance[]>
    > {
        return validateResponse(async () => {
            const response =
                await axios.post<PositionTypes.PositionPostManyResponseBody>(
                    `${this.baseUrl}`,
                    body
                );
            const responseBody =
                PositionTypes.PositionPostManyResponseBodyFromRaw(
                    response.data
                );
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
}

export class StrategyTemplateSeaDogDiscountSchemeImpl
    implements StrategyTemplateSeaDogDiscountScheme
{
    constructor(public readonly baseUrl: string) {}

    async getMany(
        query: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetManyRequestQuery
    ): Promise<
        ResponseBaseSuccess<
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeResponseBodyDataInstance[]
        >
    > {
        return validateResponse(async () => {
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
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async getSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetSingleRequestParams
    ): Promise<
        ResponseBaseSuccess<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeResponseBodyDataInstance>
    > {
        return validateResponse(async () => {
            const response =
                await axios.get<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetSingleResponseBody>(
                    `${this.baseUrl}/${params.id}`
                );
            const responseBody =
                StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeGetSingleResponseBodyFromRaw(
                    response.data
                );
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async postMany(
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyRequestBody
    ): Promise<
        ResponseBaseSuccess<
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeResponseBodyDataInstance[]
        >
    > {
        return validateResponse(async () => {
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
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async putMany(
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePostManyRequestBody
    ): Promise<
        ResponseBaseSuccess<
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeResponseBodyDataInstance[]
        >
    > {
        return validateResponse(async () => {
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
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async putSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutSingleRequestParams,
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePutSingleRequestBody
    ): Promise<
        ResponseBaseSuccess<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeResponseBodyDataInstance>
    > {
        return validateResponse(async () => {
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
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async patchMany(
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchManyRequestBody
    ): Promise<
        ResponseBaseSuccess<
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeResponseBodyDataInstance[]
        >
    > {
        return validateResponse(async () => {
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
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async patchSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchSingleRequestParams,
        body: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemePatchSingleRequestBody
    ): Promise<
        ResponseBaseSuccess<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeResponseBodyDataInstance>
    > {
        return validateResponse(async () => {
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
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async deleteMany(
        query: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteManyRequestQuery
    ): Promise<
        ResponseBaseSuccess<
            StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeResponseBodyDataInstance[]
        >
    > {
        return validateResponse(async () => {
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
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
    }
    async deleteSingle(
        params: StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteSingleRequestParams
    ): Promise<
        ResponseBaseSuccess<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeResponseBodyDataInstance>
    > {
        return validateResponse(async () => {
            const response =
                await axios.delete<StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteSingleResponseBody>(
                    `${this.baseUrl}/${params.id}`
                );
            const responseBody =
                StrategyTemplateSeaDogDiscountSchemeTypes.StrategyTemplateSeaDogDiscountSchemeDeleteSingleResponseBodyFromRaw(
                    response.data
                );
            if (responseBody.status !== 'success') {
                throw new ClientResponseError(
                    responseBody.message,
                    response.status,
                    responseBody
                );
            }
            return responseBody;
        });
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
    strategyValue(): StrategyValue {
        return new StrategyValueImpl(`${this.baseUrl}/strategyValue`);
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
