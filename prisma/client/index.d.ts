
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Deck
 * 
 */
export type Deck = $Result.DefaultSelection<Prisma.$DeckPayload>
/**
 * Model Slide
 * 
 */
export type Slide = $Result.DefaultSelection<Prisma.$SlidePayload>
/**
 * Model Card
 * 
 */
export type Card = $Result.DefaultSelection<Prisma.$CardPayload>
/**
 * Model CardType
 * 
 */
export type CardType = $Result.DefaultSelection<Prisma.$CardTypePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Decks
 * const decks = await prisma.deck.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Decks
   * const decks = await prisma.deck.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.deck`: Exposes CRUD operations for the **Deck** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Decks
    * const decks = await prisma.deck.findMany()
    * ```
    */
  get deck(): Prisma.DeckDelegate<ExtArgs>;

  /**
   * `prisma.slide`: Exposes CRUD operations for the **Slide** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Slides
    * const slides = await prisma.slide.findMany()
    * ```
    */
  get slide(): Prisma.SlideDelegate<ExtArgs>;

  /**
   * `prisma.card`: Exposes CRUD operations for the **Card** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards
    * const cards = await prisma.card.findMany()
    * ```
    */
  get card(): Prisma.CardDelegate<ExtArgs>;

  /**
   * `prisma.cardType`: Exposes CRUD operations for the **CardType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CardTypes
    * const cardTypes = await prisma.cardType.findMany()
    * ```
    */
  get cardType(): Prisma.CardTypeDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Deck: 'Deck',
    Slide: 'Slide',
    Card: 'Card',
    CardType: 'CardType'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "deck" | "slide" | "card" | "cardType"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Deck: {
        payload: Prisma.$DeckPayload<ExtArgs>
        fields: Prisma.DeckFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeckFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeckFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          findFirst: {
            args: Prisma.DeckFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeckFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          findMany: {
            args: Prisma.DeckFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>[]
          }
          create: {
            args: Prisma.DeckCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          createMany: {
            args: Prisma.DeckCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeckCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>[]
          }
          delete: {
            args: Prisma.DeckDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          update: {
            args: Prisma.DeckUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          deleteMany: {
            args: Prisma.DeckDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeckUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeckUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          aggregate: {
            args: Prisma.DeckAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeck>
          }
          groupBy: {
            args: Prisma.DeckGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeckGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeckCountArgs<ExtArgs>
            result: $Utils.Optional<DeckCountAggregateOutputType> | number
          }
        }
      }
      Slide: {
        payload: Prisma.$SlidePayload<ExtArgs>
        fields: Prisma.SlideFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SlideFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlidePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SlideFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlidePayload>
          }
          findFirst: {
            args: Prisma.SlideFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlidePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SlideFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlidePayload>
          }
          findMany: {
            args: Prisma.SlideFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlidePayload>[]
          }
          create: {
            args: Prisma.SlideCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlidePayload>
          }
          createMany: {
            args: Prisma.SlideCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SlideCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlidePayload>[]
          }
          delete: {
            args: Prisma.SlideDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlidePayload>
          }
          update: {
            args: Prisma.SlideUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlidePayload>
          }
          deleteMany: {
            args: Prisma.SlideDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SlideUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SlideUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlidePayload>
          }
          aggregate: {
            args: Prisma.SlideAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSlide>
          }
          groupBy: {
            args: Prisma.SlideGroupByArgs<ExtArgs>
            result: $Utils.Optional<SlideGroupByOutputType>[]
          }
          count: {
            args: Prisma.SlideCountArgs<ExtArgs>
            result: $Utils.Optional<SlideCountAggregateOutputType> | number
          }
        }
      }
      Card: {
        payload: Prisma.$CardPayload<ExtArgs>
        fields: Prisma.CardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findFirst: {
            args: Prisma.CardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findMany: {
            args: Prisma.CardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          create: {
            args: Prisma.CardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          createMany: {
            args: Prisma.CardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          delete: {
            args: Prisma.CardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          update: {
            args: Prisma.CardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          deleteMany: {
            args: Prisma.CardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          aggregate: {
            args: Prisma.CardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCard>
          }
          groupBy: {
            args: Prisma.CardGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardCountArgs<ExtArgs>
            result: $Utils.Optional<CardCountAggregateOutputType> | number
          }
        }
      }
      CardType: {
        payload: Prisma.$CardTypePayload<ExtArgs>
        fields: Prisma.CardTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardTypePayload>
          }
          findFirst: {
            args: Prisma.CardTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardTypePayload>
          }
          findMany: {
            args: Prisma.CardTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardTypePayload>[]
          }
          create: {
            args: Prisma.CardTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardTypePayload>
          }
          createMany: {
            args: Prisma.CardTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardTypePayload>[]
          }
          delete: {
            args: Prisma.CardTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardTypePayload>
          }
          update: {
            args: Prisma.CardTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardTypePayload>
          }
          deleteMany: {
            args: Prisma.CardTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CardTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardTypePayload>
          }
          aggregate: {
            args: Prisma.CardTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCardType>
          }
          groupBy: {
            args: Prisma.CardTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardTypeCountArgs<ExtArgs>
            result: $Utils.Optional<CardTypeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DeckCountOutputType
   */

  export type DeckCountOutputType = {
    slides: number
  }

  export type DeckCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slides?: boolean | DeckCountOutputTypeCountSlidesArgs
  }

  // Custom InputTypes
  /**
   * DeckCountOutputType without action
   */
  export type DeckCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCountOutputType
     */
    select?: DeckCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeckCountOutputType without action
   */
  export type DeckCountOutputTypeCountSlidesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlideWhereInput
  }


  /**
   * Count Type SlideCountOutputType
   */

  export type SlideCountOutputType = {
    cards: number
  }

  export type SlideCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | SlideCountOutputTypeCountCardsArgs
  }

  // Custom InputTypes
  /**
   * SlideCountOutputType without action
   */
  export type SlideCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideCountOutputType
     */
    select?: SlideCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SlideCountOutputType without action
   */
  export type SlideCountOutputTypeCountCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
  }


  /**
   * Count Type CardTypeCountOutputType
   */

  export type CardTypeCountOutputType = {
    cards: number
  }

  export type CardTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | CardTypeCountOutputTypeCountCardsArgs
  }

  // Custom InputTypes
  /**
   * CardTypeCountOutputType without action
   */
  export type CardTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardTypeCountOutputType
     */
    select?: CardTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CardTypeCountOutputType without action
   */
  export type CardTypeCountOutputTypeCountCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Deck
   */

  export type AggregateDeck = {
    _count: DeckCountAggregateOutputType | null
    _min: DeckMinAggregateOutputType | null
    _max: DeckMaxAggregateOutputType | null
  }

  export type DeckMinAggregateOutputType = {
    id: string | null
    title: string | null
  }

  export type DeckMaxAggregateOutputType = {
    id: string | null
    title: string | null
  }

  export type DeckCountAggregateOutputType = {
    id: number
    title: number
    _all: number
  }


  export type DeckMinAggregateInputType = {
    id?: true
    title?: true
  }

  export type DeckMaxAggregateInputType = {
    id?: true
    title?: true
  }

  export type DeckCountAggregateInputType = {
    id?: true
    title?: true
    _all?: true
  }

  export type DeckAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deck to aggregate.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Decks
    **/
    _count?: true | DeckCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeckMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeckMaxAggregateInputType
  }

  export type GetDeckAggregateType<T extends DeckAggregateArgs> = {
        [P in keyof T & keyof AggregateDeck]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeck[P]>
      : GetScalarType<T[P], AggregateDeck[P]>
  }




  export type DeckGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckWhereInput
    orderBy?: DeckOrderByWithAggregationInput | DeckOrderByWithAggregationInput[]
    by: DeckScalarFieldEnum[] | DeckScalarFieldEnum
    having?: DeckScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeckCountAggregateInputType | true
    _min?: DeckMinAggregateInputType
    _max?: DeckMaxAggregateInputType
  }

  export type DeckGroupByOutputType = {
    id: string
    title: string
    _count: DeckCountAggregateOutputType | null
    _min: DeckMinAggregateOutputType | null
    _max: DeckMaxAggregateOutputType | null
  }

  type GetDeckGroupByPayload<T extends DeckGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeckGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeckGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeckGroupByOutputType[P]>
            : GetScalarType<T[P], DeckGroupByOutputType[P]>
        }
      >
    >


  export type DeckSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slides?: boolean | Deck$slidesArgs<ExtArgs>
    _count?: boolean | DeckCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deck"]>

  export type DeckSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
  }, ExtArgs["result"]["deck"]>

  export type DeckSelectScalar = {
    id?: boolean
    title?: boolean
  }

  export type DeckInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slides?: boolean | Deck$slidesArgs<ExtArgs>
    _count?: boolean | DeckCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeckIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DeckPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deck"
    objects: {
      slides: Prisma.$SlidePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
    }, ExtArgs["result"]["deck"]>
    composites: {}
  }

  type DeckGetPayload<S extends boolean | null | undefined | DeckDefaultArgs> = $Result.GetResult<Prisma.$DeckPayload, S>

  type DeckCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DeckFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DeckCountAggregateInputType | true
    }

  export interface DeckDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deck'], meta: { name: 'Deck' } }
    /**
     * Find zero or one Deck that matches the filter.
     * @param {DeckFindUniqueArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeckFindUniqueArgs>(args: SelectSubset<T, DeckFindUniqueArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Deck that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DeckFindUniqueOrThrowArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeckFindUniqueOrThrowArgs>(args: SelectSubset<T, DeckFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Deck that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFindFirstArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeckFindFirstArgs>(args?: SelectSubset<T, DeckFindFirstArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Deck that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFindFirstOrThrowArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeckFindFirstOrThrowArgs>(args?: SelectSubset<T, DeckFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Decks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Decks
     * const decks = await prisma.deck.findMany()
     * 
     * // Get first 10 Decks
     * const decks = await prisma.deck.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deckWithIdOnly = await prisma.deck.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeckFindManyArgs>(args?: SelectSubset<T, DeckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Deck.
     * @param {DeckCreateArgs} args - Arguments to create a Deck.
     * @example
     * // Create one Deck
     * const Deck = await prisma.deck.create({
     *   data: {
     *     // ... data to create a Deck
     *   }
     * })
     * 
     */
    create<T extends DeckCreateArgs>(args: SelectSubset<T, DeckCreateArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Decks.
     * @param {DeckCreateManyArgs} args - Arguments to create many Decks.
     * @example
     * // Create many Decks
     * const deck = await prisma.deck.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeckCreateManyArgs>(args?: SelectSubset<T, DeckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Decks and returns the data saved in the database.
     * @param {DeckCreateManyAndReturnArgs} args - Arguments to create many Decks.
     * @example
     * // Create many Decks
     * const deck = await prisma.deck.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Decks and only return the `id`
     * const deckWithIdOnly = await prisma.deck.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeckCreateManyAndReturnArgs>(args?: SelectSubset<T, DeckCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Deck.
     * @param {DeckDeleteArgs} args - Arguments to delete one Deck.
     * @example
     * // Delete one Deck
     * const Deck = await prisma.deck.delete({
     *   where: {
     *     // ... filter to delete one Deck
     *   }
     * })
     * 
     */
    delete<T extends DeckDeleteArgs>(args: SelectSubset<T, DeckDeleteArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Deck.
     * @param {DeckUpdateArgs} args - Arguments to update one Deck.
     * @example
     * // Update one Deck
     * const deck = await prisma.deck.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeckUpdateArgs>(args: SelectSubset<T, DeckUpdateArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Decks.
     * @param {DeckDeleteManyArgs} args - Arguments to filter Decks to delete.
     * @example
     * // Delete a few Decks
     * const { count } = await prisma.deck.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeckDeleteManyArgs>(args?: SelectSubset<T, DeckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Decks
     * const deck = await prisma.deck.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeckUpdateManyArgs>(args: SelectSubset<T, DeckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Deck.
     * @param {DeckUpsertArgs} args - Arguments to update or create a Deck.
     * @example
     * // Update or create a Deck
     * const deck = await prisma.deck.upsert({
     *   create: {
     *     // ... data to create a Deck
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deck we want to update
     *   }
     * })
     */
    upsert<T extends DeckUpsertArgs>(args: SelectSubset<T, DeckUpsertArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCountArgs} args - Arguments to filter Decks to count.
     * @example
     * // Count the number of Decks
     * const count = await prisma.deck.count({
     *   where: {
     *     // ... the filter for the Decks we want to count
     *   }
     * })
    **/
    count<T extends DeckCountArgs>(
      args?: Subset<T, DeckCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeckCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeckAggregateArgs>(args: Subset<T, DeckAggregateArgs>): Prisma.PrismaPromise<GetDeckAggregateType<T>>

    /**
     * Group by Deck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeckGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeckGroupByArgs['orderBy'] }
        : { orderBy?: DeckGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deck model
   */
  readonly fields: DeckFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deck.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeckClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    slides<T extends Deck$slidesArgs<ExtArgs> = {}>(args?: Subset<T, Deck$slidesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlidePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Deck model
   */ 
  interface DeckFieldRefs {
    readonly id: FieldRef<"Deck", 'String'>
    readonly title: FieldRef<"Deck", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Deck findUnique
   */
  export type DeckFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck findUniqueOrThrow
   */
  export type DeckFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck findFirst
   */
  export type DeckFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decks.
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decks.
     */
    distinct?: DeckScalarFieldEnum | DeckScalarFieldEnum[]
  }

  /**
   * Deck findFirstOrThrow
   */
  export type DeckFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decks.
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decks.
     */
    distinct?: DeckScalarFieldEnum | DeckScalarFieldEnum[]
  }

  /**
   * Deck findMany
   */
  export type DeckFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Decks to fetch.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Decks.
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    distinct?: DeckScalarFieldEnum | DeckScalarFieldEnum[]
  }

  /**
   * Deck create
   */
  export type DeckCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * The data needed to create a Deck.
     */
    data: XOR<DeckCreateInput, DeckUncheckedCreateInput>
  }

  /**
   * Deck createMany
   */
  export type DeckCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Decks.
     */
    data: DeckCreateManyInput | DeckCreateManyInput[]
  }

  /**
   * Deck createManyAndReturn
   */
  export type DeckCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Decks.
     */
    data: DeckCreateManyInput | DeckCreateManyInput[]
  }

  /**
   * Deck update
   */
  export type DeckUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * The data needed to update a Deck.
     */
    data: XOR<DeckUpdateInput, DeckUncheckedUpdateInput>
    /**
     * Choose, which Deck to update.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck updateMany
   */
  export type DeckUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Decks.
     */
    data: XOR<DeckUpdateManyMutationInput, DeckUncheckedUpdateManyInput>
    /**
     * Filter which Decks to update
     */
    where?: DeckWhereInput
  }

  /**
   * Deck upsert
   */
  export type DeckUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * The filter to search for the Deck to update in case it exists.
     */
    where: DeckWhereUniqueInput
    /**
     * In case the Deck found by the `where` argument doesn't exist, create a new Deck with this data.
     */
    create: XOR<DeckCreateInput, DeckUncheckedCreateInput>
    /**
     * In case the Deck was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeckUpdateInput, DeckUncheckedUpdateInput>
  }

  /**
   * Deck delete
   */
  export type DeckDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter which Deck to delete.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck deleteMany
   */
  export type DeckDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Decks to delete
     */
    where?: DeckWhereInput
  }

  /**
   * Deck.slides
   */
  export type Deck$slidesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slide
     */
    select?: SlideSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideInclude<ExtArgs> | null
    where?: SlideWhereInput
    orderBy?: SlideOrderByWithRelationInput | SlideOrderByWithRelationInput[]
    cursor?: SlideWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SlideScalarFieldEnum | SlideScalarFieldEnum[]
  }

  /**
   * Deck without action
   */
  export type DeckDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
  }


  /**
   * Model Slide
   */

  export type AggregateSlide = {
    _count: SlideCountAggregateOutputType | null
    _min: SlideMinAggregateOutputType | null
    _max: SlideMaxAggregateOutputType | null
  }

  export type SlideMinAggregateOutputType = {
    id: string | null
    title: string | null
    deck: string | null
  }

  export type SlideMaxAggregateOutputType = {
    id: string | null
    title: string | null
    deck: string | null
  }

  export type SlideCountAggregateOutputType = {
    id: number
    title: number
    deck: number
    _all: number
  }


  export type SlideMinAggregateInputType = {
    id?: true
    title?: true
    deck?: true
  }

  export type SlideMaxAggregateInputType = {
    id?: true
    title?: true
    deck?: true
  }

  export type SlideCountAggregateInputType = {
    id?: true
    title?: true
    deck?: true
    _all?: true
  }

  export type SlideAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Slide to aggregate.
     */
    where?: SlideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slides to fetch.
     */
    orderBy?: SlideOrderByWithRelationInput | SlideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SlideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Slides
    **/
    _count?: true | SlideCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SlideMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SlideMaxAggregateInputType
  }

  export type GetSlideAggregateType<T extends SlideAggregateArgs> = {
        [P in keyof T & keyof AggregateSlide]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSlide[P]>
      : GetScalarType<T[P], AggregateSlide[P]>
  }




  export type SlideGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlideWhereInput
    orderBy?: SlideOrderByWithAggregationInput | SlideOrderByWithAggregationInput[]
    by: SlideScalarFieldEnum[] | SlideScalarFieldEnum
    having?: SlideScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SlideCountAggregateInputType | true
    _min?: SlideMinAggregateInputType
    _max?: SlideMaxAggregateInputType
  }

  export type SlideGroupByOutputType = {
    id: string
    title: string
    deck: string
    _count: SlideCountAggregateOutputType | null
    _min: SlideMinAggregateOutputType | null
    _max: SlideMaxAggregateOutputType | null
  }

  type GetSlideGroupByPayload<T extends SlideGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SlideGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SlideGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SlideGroupByOutputType[P]>
            : GetScalarType<T[P], SlideGroupByOutputType[P]>
        }
      >
    >


  export type SlideSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    deck?: boolean
    Deck?: boolean | DeckDefaultArgs<ExtArgs>
    cards?: boolean | Slide$cardsArgs<ExtArgs>
    _count?: boolean | SlideCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slide"]>

  export type SlideSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    deck?: boolean
    Deck?: boolean | DeckDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slide"]>

  export type SlideSelectScalar = {
    id?: boolean
    title?: boolean
    deck?: boolean
  }

  export type SlideInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Deck?: boolean | DeckDefaultArgs<ExtArgs>
    cards?: boolean | Slide$cardsArgs<ExtArgs>
    _count?: boolean | SlideCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SlideIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Deck?: boolean | DeckDefaultArgs<ExtArgs>
  }

  export type $SlidePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Slide"
    objects: {
      Deck: Prisma.$DeckPayload<ExtArgs>
      cards: Prisma.$CardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      deck: string
    }, ExtArgs["result"]["slide"]>
    composites: {}
  }

  type SlideGetPayload<S extends boolean | null | undefined | SlideDefaultArgs> = $Result.GetResult<Prisma.$SlidePayload, S>

  type SlideCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SlideFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SlideCountAggregateInputType | true
    }

  export interface SlideDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Slide'], meta: { name: 'Slide' } }
    /**
     * Find zero or one Slide that matches the filter.
     * @param {SlideFindUniqueArgs} args - Arguments to find a Slide
     * @example
     * // Get one Slide
     * const slide = await prisma.slide.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SlideFindUniqueArgs>(args: SelectSubset<T, SlideFindUniqueArgs<ExtArgs>>): Prisma__SlideClient<$Result.GetResult<Prisma.$SlidePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Slide that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SlideFindUniqueOrThrowArgs} args - Arguments to find a Slide
     * @example
     * // Get one Slide
     * const slide = await prisma.slide.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SlideFindUniqueOrThrowArgs>(args: SelectSubset<T, SlideFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SlideClient<$Result.GetResult<Prisma.$SlidePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Slide that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideFindFirstArgs} args - Arguments to find a Slide
     * @example
     * // Get one Slide
     * const slide = await prisma.slide.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SlideFindFirstArgs>(args?: SelectSubset<T, SlideFindFirstArgs<ExtArgs>>): Prisma__SlideClient<$Result.GetResult<Prisma.$SlidePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Slide that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideFindFirstOrThrowArgs} args - Arguments to find a Slide
     * @example
     * // Get one Slide
     * const slide = await prisma.slide.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SlideFindFirstOrThrowArgs>(args?: SelectSubset<T, SlideFindFirstOrThrowArgs<ExtArgs>>): Prisma__SlideClient<$Result.GetResult<Prisma.$SlidePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Slides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Slides
     * const slides = await prisma.slide.findMany()
     * 
     * // Get first 10 Slides
     * const slides = await prisma.slide.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const slideWithIdOnly = await prisma.slide.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SlideFindManyArgs>(args?: SelectSubset<T, SlideFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlidePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Slide.
     * @param {SlideCreateArgs} args - Arguments to create a Slide.
     * @example
     * // Create one Slide
     * const Slide = await prisma.slide.create({
     *   data: {
     *     // ... data to create a Slide
     *   }
     * })
     * 
     */
    create<T extends SlideCreateArgs>(args: SelectSubset<T, SlideCreateArgs<ExtArgs>>): Prisma__SlideClient<$Result.GetResult<Prisma.$SlidePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Slides.
     * @param {SlideCreateManyArgs} args - Arguments to create many Slides.
     * @example
     * // Create many Slides
     * const slide = await prisma.slide.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SlideCreateManyArgs>(args?: SelectSubset<T, SlideCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Slides and returns the data saved in the database.
     * @param {SlideCreateManyAndReturnArgs} args - Arguments to create many Slides.
     * @example
     * // Create many Slides
     * const slide = await prisma.slide.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Slides and only return the `id`
     * const slideWithIdOnly = await prisma.slide.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SlideCreateManyAndReturnArgs>(args?: SelectSubset<T, SlideCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlidePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Slide.
     * @param {SlideDeleteArgs} args - Arguments to delete one Slide.
     * @example
     * // Delete one Slide
     * const Slide = await prisma.slide.delete({
     *   where: {
     *     // ... filter to delete one Slide
     *   }
     * })
     * 
     */
    delete<T extends SlideDeleteArgs>(args: SelectSubset<T, SlideDeleteArgs<ExtArgs>>): Prisma__SlideClient<$Result.GetResult<Prisma.$SlidePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Slide.
     * @param {SlideUpdateArgs} args - Arguments to update one Slide.
     * @example
     * // Update one Slide
     * const slide = await prisma.slide.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SlideUpdateArgs>(args: SelectSubset<T, SlideUpdateArgs<ExtArgs>>): Prisma__SlideClient<$Result.GetResult<Prisma.$SlidePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Slides.
     * @param {SlideDeleteManyArgs} args - Arguments to filter Slides to delete.
     * @example
     * // Delete a few Slides
     * const { count } = await prisma.slide.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SlideDeleteManyArgs>(args?: SelectSubset<T, SlideDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Slides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Slides
     * const slide = await prisma.slide.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SlideUpdateManyArgs>(args: SelectSubset<T, SlideUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Slide.
     * @param {SlideUpsertArgs} args - Arguments to update or create a Slide.
     * @example
     * // Update or create a Slide
     * const slide = await prisma.slide.upsert({
     *   create: {
     *     // ... data to create a Slide
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Slide we want to update
     *   }
     * })
     */
    upsert<T extends SlideUpsertArgs>(args: SelectSubset<T, SlideUpsertArgs<ExtArgs>>): Prisma__SlideClient<$Result.GetResult<Prisma.$SlidePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Slides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideCountArgs} args - Arguments to filter Slides to count.
     * @example
     * // Count the number of Slides
     * const count = await prisma.slide.count({
     *   where: {
     *     // ... the filter for the Slides we want to count
     *   }
     * })
    **/
    count<T extends SlideCountArgs>(
      args?: Subset<T, SlideCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SlideCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Slide.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SlideAggregateArgs>(args: Subset<T, SlideAggregateArgs>): Prisma.PrismaPromise<GetSlideAggregateType<T>>

    /**
     * Group by Slide.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SlideGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SlideGroupByArgs['orderBy'] }
        : { orderBy?: SlideGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SlideGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSlideGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Slide model
   */
  readonly fields: SlideFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Slide.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SlideClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Deck<T extends DeckDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeckDefaultArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    cards<T extends Slide$cardsArgs<ExtArgs> = {}>(args?: Subset<T, Slide$cardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Slide model
   */ 
  interface SlideFieldRefs {
    readonly id: FieldRef<"Slide", 'String'>
    readonly title: FieldRef<"Slide", 'String'>
    readonly deck: FieldRef<"Slide", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Slide findUnique
   */
  export type SlideFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slide
     */
    select?: SlideSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideInclude<ExtArgs> | null
    /**
     * Filter, which Slide to fetch.
     */
    where: SlideWhereUniqueInput
  }

  /**
   * Slide findUniqueOrThrow
   */
  export type SlideFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slide
     */
    select?: SlideSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideInclude<ExtArgs> | null
    /**
     * Filter, which Slide to fetch.
     */
    where: SlideWhereUniqueInput
  }

  /**
   * Slide findFirst
   */
  export type SlideFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slide
     */
    select?: SlideSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideInclude<ExtArgs> | null
    /**
     * Filter, which Slide to fetch.
     */
    where?: SlideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slides to fetch.
     */
    orderBy?: SlideOrderByWithRelationInput | SlideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Slides.
     */
    cursor?: SlideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Slides.
     */
    distinct?: SlideScalarFieldEnum | SlideScalarFieldEnum[]
  }

  /**
   * Slide findFirstOrThrow
   */
  export type SlideFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slide
     */
    select?: SlideSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideInclude<ExtArgs> | null
    /**
     * Filter, which Slide to fetch.
     */
    where?: SlideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slides to fetch.
     */
    orderBy?: SlideOrderByWithRelationInput | SlideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Slides.
     */
    cursor?: SlideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Slides.
     */
    distinct?: SlideScalarFieldEnum | SlideScalarFieldEnum[]
  }

  /**
   * Slide findMany
   */
  export type SlideFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slide
     */
    select?: SlideSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideInclude<ExtArgs> | null
    /**
     * Filter, which Slides to fetch.
     */
    where?: SlideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slides to fetch.
     */
    orderBy?: SlideOrderByWithRelationInput | SlideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Slides.
     */
    cursor?: SlideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slides.
     */
    skip?: number
    distinct?: SlideScalarFieldEnum | SlideScalarFieldEnum[]
  }

  /**
   * Slide create
   */
  export type SlideCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slide
     */
    select?: SlideSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideInclude<ExtArgs> | null
    /**
     * The data needed to create a Slide.
     */
    data: XOR<SlideCreateInput, SlideUncheckedCreateInput>
  }

  /**
   * Slide createMany
   */
  export type SlideCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Slides.
     */
    data: SlideCreateManyInput | SlideCreateManyInput[]
  }

  /**
   * Slide createManyAndReturn
   */
  export type SlideCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slide
     */
    select?: SlideSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Slides.
     */
    data: SlideCreateManyInput | SlideCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Slide update
   */
  export type SlideUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slide
     */
    select?: SlideSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideInclude<ExtArgs> | null
    /**
     * The data needed to update a Slide.
     */
    data: XOR<SlideUpdateInput, SlideUncheckedUpdateInput>
    /**
     * Choose, which Slide to update.
     */
    where: SlideWhereUniqueInput
  }

  /**
   * Slide updateMany
   */
  export type SlideUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Slides.
     */
    data: XOR<SlideUpdateManyMutationInput, SlideUncheckedUpdateManyInput>
    /**
     * Filter which Slides to update
     */
    where?: SlideWhereInput
  }

  /**
   * Slide upsert
   */
  export type SlideUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slide
     */
    select?: SlideSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideInclude<ExtArgs> | null
    /**
     * The filter to search for the Slide to update in case it exists.
     */
    where: SlideWhereUniqueInput
    /**
     * In case the Slide found by the `where` argument doesn't exist, create a new Slide with this data.
     */
    create: XOR<SlideCreateInput, SlideUncheckedCreateInput>
    /**
     * In case the Slide was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SlideUpdateInput, SlideUncheckedUpdateInput>
  }

  /**
   * Slide delete
   */
  export type SlideDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slide
     */
    select?: SlideSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideInclude<ExtArgs> | null
    /**
     * Filter which Slide to delete.
     */
    where: SlideWhereUniqueInput
  }

  /**
   * Slide deleteMany
   */
  export type SlideDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Slides to delete
     */
    where?: SlideWhereInput
  }

  /**
   * Slide.cards
   */
  export type Slide$cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    where?: CardWhereInput
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    cursor?: CardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Slide without action
   */
  export type SlideDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slide
     */
    select?: SlideSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideInclude<ExtArgs> | null
  }


  /**
   * Model Card
   */

  export type AggregateCard = {
    _count: CardCountAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  export type CardMinAggregateOutputType = {
    id: string | null
    type: string | null
    tags: string | null
    data: string | null
    slide: string | null
  }

  export type CardMaxAggregateOutputType = {
    id: string | null
    type: string | null
    tags: string | null
    data: string | null
    slide: string | null
  }

  export type CardCountAggregateOutputType = {
    id: number
    type: number
    tags: number
    data: number
    slide: number
    _all: number
  }


  export type CardMinAggregateInputType = {
    id?: true
    type?: true
    tags?: true
    data?: true
    slide?: true
  }

  export type CardMaxAggregateInputType = {
    id?: true
    type?: true
    tags?: true
    data?: true
    slide?: true
  }

  export type CardCountAggregateInputType = {
    id?: true
    type?: true
    tags?: true
    data?: true
    slide?: true
    _all?: true
  }

  export type CardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Card to aggregate.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cards
    **/
    _count?: true | CardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardMaxAggregateInputType
  }

  export type GetCardAggregateType<T extends CardAggregateArgs> = {
        [P in keyof T & keyof AggregateCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCard[P]>
      : GetScalarType<T[P], AggregateCard[P]>
  }




  export type CardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
    orderBy?: CardOrderByWithAggregationInput | CardOrderByWithAggregationInput[]
    by: CardScalarFieldEnum[] | CardScalarFieldEnum
    having?: CardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardCountAggregateInputType | true
    _min?: CardMinAggregateInputType
    _max?: CardMaxAggregateInputType
  }

  export type CardGroupByOutputType = {
    id: string
    type: string
    tags: string
    data: string
    slide: string
    _count: CardCountAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  type GetCardGroupByPayload<T extends CardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardGroupByOutputType[P]>
            : GetScalarType<T[P], CardGroupByOutputType[P]>
        }
      >
    >


  export type CardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    tags?: boolean
    data?: boolean
    slide?: boolean
    CardType?: boolean | CardTypeDefaultArgs<ExtArgs>
    Slide?: boolean | SlideDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    tags?: boolean
    data?: boolean
    slide?: boolean
    CardType?: boolean | CardTypeDefaultArgs<ExtArgs>
    Slide?: boolean | SlideDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectScalar = {
    id?: boolean
    type?: boolean
    tags?: boolean
    data?: boolean
    slide?: boolean
  }

  export type CardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CardType?: boolean | CardTypeDefaultArgs<ExtArgs>
    Slide?: boolean | SlideDefaultArgs<ExtArgs>
  }
  export type CardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CardType?: boolean | CardTypeDefaultArgs<ExtArgs>
    Slide?: boolean | SlideDefaultArgs<ExtArgs>
  }

  export type $CardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Card"
    objects: {
      CardType: Prisma.$CardTypePayload<ExtArgs>
      Slide: Prisma.$SlidePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      tags: string
      data: string
      slide: string
    }, ExtArgs["result"]["card"]>
    composites: {}
  }

  type CardGetPayload<S extends boolean | null | undefined | CardDefaultArgs> = $Result.GetResult<Prisma.$CardPayload, S>

  type CardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CardFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CardCountAggregateInputType | true
    }

  export interface CardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Card'], meta: { name: 'Card' } }
    /**
     * Find zero or one Card that matches the filter.
     * @param {CardFindUniqueArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardFindUniqueArgs>(args: SelectSubset<T, CardFindUniqueArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Card that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CardFindUniqueOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardFindUniqueOrThrowArgs>(args: SelectSubset<T, CardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Card that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardFindFirstArgs>(args?: SelectSubset<T, CardFindFirstArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Card that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardFindFirstOrThrowArgs>(args?: SelectSubset<T, CardFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.card.findMany()
     * 
     * // Get first 10 Cards
     * const cards = await prisma.card.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardWithIdOnly = await prisma.card.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardFindManyArgs>(args?: SelectSubset<T, CardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Card.
     * @param {CardCreateArgs} args - Arguments to create a Card.
     * @example
     * // Create one Card
     * const Card = await prisma.card.create({
     *   data: {
     *     // ... data to create a Card
     *   }
     * })
     * 
     */
    create<T extends CardCreateArgs>(args: SelectSubset<T, CardCreateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Cards.
     * @param {CardCreateManyArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardCreateManyArgs>(args?: SelectSubset<T, CardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cards and returns the data saved in the database.
     * @param {CardCreateManyAndReturnArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardCreateManyAndReturnArgs>(args?: SelectSubset<T, CardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Card.
     * @param {CardDeleteArgs} args - Arguments to delete one Card.
     * @example
     * // Delete one Card
     * const Card = await prisma.card.delete({
     *   where: {
     *     // ... filter to delete one Card
     *   }
     * })
     * 
     */
    delete<T extends CardDeleteArgs>(args: SelectSubset<T, CardDeleteArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Card.
     * @param {CardUpdateArgs} args - Arguments to update one Card.
     * @example
     * // Update one Card
     * const card = await prisma.card.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardUpdateArgs>(args: SelectSubset<T, CardUpdateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Cards.
     * @param {CardDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.card.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardDeleteManyArgs>(args?: SelectSubset<T, CardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardUpdateManyArgs>(args: SelectSubset<T, CardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Card.
     * @param {CardUpsertArgs} args - Arguments to update or create a Card.
     * @example
     * // Update or create a Card
     * const card = await prisma.card.upsert({
     *   create: {
     *     // ... data to create a Card
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card we want to update
     *   }
     * })
     */
    upsert<T extends CardUpsertArgs>(args: SelectSubset<T, CardUpsertArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.card.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends CardCountArgs>(
      args?: Subset<T, CardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CardAggregateArgs>(args: Subset<T, CardAggregateArgs>): Prisma.PrismaPromise<GetCardAggregateType<T>>

    /**
     * Group by Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardGroupByArgs['orderBy'] }
        : { orderBy?: CardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Card model
   */
  readonly fields: CardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Card.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CardType<T extends CardTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardTypeDefaultArgs<ExtArgs>>): Prisma__CardTypeClient<$Result.GetResult<Prisma.$CardTypePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Slide<T extends SlideDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SlideDefaultArgs<ExtArgs>>): Prisma__SlideClient<$Result.GetResult<Prisma.$SlidePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Card model
   */ 
  interface CardFieldRefs {
    readonly id: FieldRef<"Card", 'String'>
    readonly type: FieldRef<"Card", 'String'>
    readonly tags: FieldRef<"Card", 'String'>
    readonly data: FieldRef<"Card", 'String'>
    readonly slide: FieldRef<"Card", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Card findUnique
   */
  export type CardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findUniqueOrThrow
   */
  export type CardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findFirst
   */
  export type CardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findFirstOrThrow
   */
  export type CardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findMany
   */
  export type CardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card create
   */
  export type CardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to create a Card.
     */
    data: XOR<CardCreateInput, CardUncheckedCreateInput>
  }

  /**
   * Card createMany
   */
  export type CardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
  }

  /**
   * Card createManyAndReturn
   */
  export type CardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Card update
   */
  export type CardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to update a Card.
     */
    data: XOR<CardUpdateInput, CardUncheckedUpdateInput>
    /**
     * Choose, which Card to update.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card updateMany
   */
  export type CardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
  }

  /**
   * Card upsert
   */
  export type CardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The filter to search for the Card to update in case it exists.
     */
    where: CardWhereUniqueInput
    /**
     * In case the Card found by the `where` argument doesn't exist, create a new Card with this data.
     */
    create: XOR<CardCreateInput, CardUncheckedCreateInput>
    /**
     * In case the Card was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardUpdateInput, CardUncheckedUpdateInput>
  }

  /**
   * Card delete
   */
  export type CardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter which Card to delete.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card deleteMany
   */
  export type CardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cards to delete
     */
    where?: CardWhereInput
  }

  /**
   * Card without action
   */
  export type CardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
  }


  /**
   * Model CardType
   */

  export type AggregateCardType = {
    _count: CardTypeCountAggregateOutputType | null
    _min: CardTypeMinAggregateOutputType | null
    _max: CardTypeMaxAggregateOutputType | null
  }

  export type CardTypeMinAggregateOutputType = {
    type: string | null
  }

  export type CardTypeMaxAggregateOutputType = {
    type: string | null
  }

  export type CardTypeCountAggregateOutputType = {
    type: number
    _all: number
  }


  export type CardTypeMinAggregateInputType = {
    type?: true
  }

  export type CardTypeMaxAggregateInputType = {
    type?: true
  }

  export type CardTypeCountAggregateInputType = {
    type?: true
    _all?: true
  }

  export type CardTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardType to aggregate.
     */
    where?: CardTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardTypes to fetch.
     */
    orderBy?: CardTypeOrderByWithRelationInput | CardTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CardTypes
    **/
    _count?: true | CardTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardTypeMaxAggregateInputType
  }

  export type GetCardTypeAggregateType<T extends CardTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateCardType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCardType[P]>
      : GetScalarType<T[P], AggregateCardType[P]>
  }




  export type CardTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardTypeWhereInput
    orderBy?: CardTypeOrderByWithAggregationInput | CardTypeOrderByWithAggregationInput[]
    by: CardTypeScalarFieldEnum[] | CardTypeScalarFieldEnum
    having?: CardTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardTypeCountAggregateInputType | true
    _min?: CardTypeMinAggregateInputType
    _max?: CardTypeMaxAggregateInputType
  }

  export type CardTypeGroupByOutputType = {
    type: string
    _count: CardTypeCountAggregateOutputType | null
    _min: CardTypeMinAggregateOutputType | null
    _max: CardTypeMaxAggregateOutputType | null
  }

  type GetCardTypeGroupByPayload<T extends CardTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardTypeGroupByOutputType[P]>
            : GetScalarType<T[P], CardTypeGroupByOutputType[P]>
        }
      >
    >


  export type CardTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    type?: boolean
    cards?: boolean | CardType$cardsArgs<ExtArgs>
    _count?: boolean | CardTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardType"]>

  export type CardTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    type?: boolean
  }, ExtArgs["result"]["cardType"]>

  export type CardTypeSelectScalar = {
    type?: boolean
  }

  export type CardTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | CardType$cardsArgs<ExtArgs>
    _count?: boolean | CardTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CardTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CardTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CardType"
    objects: {
      cards: Prisma.$CardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      type: string
    }, ExtArgs["result"]["cardType"]>
    composites: {}
  }

  type CardTypeGetPayload<S extends boolean | null | undefined | CardTypeDefaultArgs> = $Result.GetResult<Prisma.$CardTypePayload, S>

  type CardTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CardTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CardTypeCountAggregateInputType | true
    }

  export interface CardTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CardType'], meta: { name: 'CardType' } }
    /**
     * Find zero or one CardType that matches the filter.
     * @param {CardTypeFindUniqueArgs} args - Arguments to find a CardType
     * @example
     * // Get one CardType
     * const cardType = await prisma.cardType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardTypeFindUniqueArgs>(args: SelectSubset<T, CardTypeFindUniqueArgs<ExtArgs>>): Prisma__CardTypeClient<$Result.GetResult<Prisma.$CardTypePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CardType that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CardTypeFindUniqueOrThrowArgs} args - Arguments to find a CardType
     * @example
     * // Get one CardType
     * const cardType = await prisma.cardType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, CardTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardTypeClient<$Result.GetResult<Prisma.$CardTypePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CardType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardTypeFindFirstArgs} args - Arguments to find a CardType
     * @example
     * // Get one CardType
     * const cardType = await prisma.cardType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardTypeFindFirstArgs>(args?: SelectSubset<T, CardTypeFindFirstArgs<ExtArgs>>): Prisma__CardTypeClient<$Result.GetResult<Prisma.$CardTypePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CardType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardTypeFindFirstOrThrowArgs} args - Arguments to find a CardType
     * @example
     * // Get one CardType
     * const cardType = await prisma.cardType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, CardTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardTypeClient<$Result.GetResult<Prisma.$CardTypePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CardTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CardTypes
     * const cardTypes = await prisma.cardType.findMany()
     * 
     * // Get first 10 CardTypes
     * const cardTypes = await prisma.cardType.findMany({ take: 10 })
     * 
     * // Only select the `type`
     * const cardTypeWithTypeOnly = await prisma.cardType.findMany({ select: { type: true } })
     * 
     */
    findMany<T extends CardTypeFindManyArgs>(args?: SelectSubset<T, CardTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardTypePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CardType.
     * @param {CardTypeCreateArgs} args - Arguments to create a CardType.
     * @example
     * // Create one CardType
     * const CardType = await prisma.cardType.create({
     *   data: {
     *     // ... data to create a CardType
     *   }
     * })
     * 
     */
    create<T extends CardTypeCreateArgs>(args: SelectSubset<T, CardTypeCreateArgs<ExtArgs>>): Prisma__CardTypeClient<$Result.GetResult<Prisma.$CardTypePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CardTypes.
     * @param {CardTypeCreateManyArgs} args - Arguments to create many CardTypes.
     * @example
     * // Create many CardTypes
     * const cardType = await prisma.cardType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardTypeCreateManyArgs>(args?: SelectSubset<T, CardTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CardTypes and returns the data saved in the database.
     * @param {CardTypeCreateManyAndReturnArgs} args - Arguments to create many CardTypes.
     * @example
     * // Create many CardTypes
     * const cardType = await prisma.cardType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CardTypes and only return the `type`
     * const cardTypeWithTypeOnly = await prisma.cardType.createManyAndReturn({ 
     *   select: { type: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, CardTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardTypePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CardType.
     * @param {CardTypeDeleteArgs} args - Arguments to delete one CardType.
     * @example
     * // Delete one CardType
     * const CardType = await prisma.cardType.delete({
     *   where: {
     *     // ... filter to delete one CardType
     *   }
     * })
     * 
     */
    delete<T extends CardTypeDeleteArgs>(args: SelectSubset<T, CardTypeDeleteArgs<ExtArgs>>): Prisma__CardTypeClient<$Result.GetResult<Prisma.$CardTypePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CardType.
     * @param {CardTypeUpdateArgs} args - Arguments to update one CardType.
     * @example
     * // Update one CardType
     * const cardType = await prisma.cardType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardTypeUpdateArgs>(args: SelectSubset<T, CardTypeUpdateArgs<ExtArgs>>): Prisma__CardTypeClient<$Result.GetResult<Prisma.$CardTypePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CardTypes.
     * @param {CardTypeDeleteManyArgs} args - Arguments to filter CardTypes to delete.
     * @example
     * // Delete a few CardTypes
     * const { count } = await prisma.cardType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardTypeDeleteManyArgs>(args?: SelectSubset<T, CardTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CardTypes
     * const cardType = await prisma.cardType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardTypeUpdateManyArgs>(args: SelectSubset<T, CardTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CardType.
     * @param {CardTypeUpsertArgs} args - Arguments to update or create a CardType.
     * @example
     * // Update or create a CardType
     * const cardType = await prisma.cardType.upsert({
     *   create: {
     *     // ... data to create a CardType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CardType we want to update
     *   }
     * })
     */
    upsert<T extends CardTypeUpsertArgs>(args: SelectSubset<T, CardTypeUpsertArgs<ExtArgs>>): Prisma__CardTypeClient<$Result.GetResult<Prisma.$CardTypePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CardTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardTypeCountArgs} args - Arguments to filter CardTypes to count.
     * @example
     * // Count the number of CardTypes
     * const count = await prisma.cardType.count({
     *   where: {
     *     // ... the filter for the CardTypes we want to count
     *   }
     * })
    **/
    count<T extends CardTypeCountArgs>(
      args?: Subset<T, CardTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CardType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CardTypeAggregateArgs>(args: Subset<T, CardTypeAggregateArgs>): Prisma.PrismaPromise<GetCardTypeAggregateType<T>>

    /**
     * Group by CardType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CardTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardTypeGroupByArgs['orderBy'] }
        : { orderBy?: CardTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CardTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CardType model
   */
  readonly fields: CardTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CardType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cards<T extends CardType$cardsArgs<ExtArgs> = {}>(args?: Subset<T, CardType$cardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CardType model
   */ 
  interface CardTypeFieldRefs {
    readonly type: FieldRef<"CardType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CardType findUnique
   */
  export type CardTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardType
     */
    select?: CardTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardTypeInclude<ExtArgs> | null
    /**
     * Filter, which CardType to fetch.
     */
    where: CardTypeWhereUniqueInput
  }

  /**
   * CardType findUniqueOrThrow
   */
  export type CardTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardType
     */
    select?: CardTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardTypeInclude<ExtArgs> | null
    /**
     * Filter, which CardType to fetch.
     */
    where: CardTypeWhereUniqueInput
  }

  /**
   * CardType findFirst
   */
  export type CardTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardType
     */
    select?: CardTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardTypeInclude<ExtArgs> | null
    /**
     * Filter, which CardType to fetch.
     */
    where?: CardTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardTypes to fetch.
     */
    orderBy?: CardTypeOrderByWithRelationInput | CardTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardTypes.
     */
    cursor?: CardTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardTypes.
     */
    distinct?: CardTypeScalarFieldEnum | CardTypeScalarFieldEnum[]
  }

  /**
   * CardType findFirstOrThrow
   */
  export type CardTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardType
     */
    select?: CardTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardTypeInclude<ExtArgs> | null
    /**
     * Filter, which CardType to fetch.
     */
    where?: CardTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardTypes to fetch.
     */
    orderBy?: CardTypeOrderByWithRelationInput | CardTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardTypes.
     */
    cursor?: CardTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardTypes.
     */
    distinct?: CardTypeScalarFieldEnum | CardTypeScalarFieldEnum[]
  }

  /**
   * CardType findMany
   */
  export type CardTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardType
     */
    select?: CardTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardTypeInclude<ExtArgs> | null
    /**
     * Filter, which CardTypes to fetch.
     */
    where?: CardTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardTypes to fetch.
     */
    orderBy?: CardTypeOrderByWithRelationInput | CardTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CardTypes.
     */
    cursor?: CardTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardTypes.
     */
    skip?: number
    distinct?: CardTypeScalarFieldEnum | CardTypeScalarFieldEnum[]
  }

  /**
   * CardType create
   */
  export type CardTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardType
     */
    select?: CardTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a CardType.
     */
    data: XOR<CardTypeCreateInput, CardTypeUncheckedCreateInput>
  }

  /**
   * CardType createMany
   */
  export type CardTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CardTypes.
     */
    data: CardTypeCreateManyInput | CardTypeCreateManyInput[]
  }

  /**
   * CardType createManyAndReturn
   */
  export type CardTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardType
     */
    select?: CardTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CardTypes.
     */
    data: CardTypeCreateManyInput | CardTypeCreateManyInput[]
  }

  /**
   * CardType update
   */
  export type CardTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardType
     */
    select?: CardTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a CardType.
     */
    data: XOR<CardTypeUpdateInput, CardTypeUncheckedUpdateInput>
    /**
     * Choose, which CardType to update.
     */
    where: CardTypeWhereUniqueInput
  }

  /**
   * CardType updateMany
   */
  export type CardTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CardTypes.
     */
    data: XOR<CardTypeUpdateManyMutationInput, CardTypeUncheckedUpdateManyInput>
    /**
     * Filter which CardTypes to update
     */
    where?: CardTypeWhereInput
  }

  /**
   * CardType upsert
   */
  export type CardTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardType
     */
    select?: CardTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the CardType to update in case it exists.
     */
    where: CardTypeWhereUniqueInput
    /**
     * In case the CardType found by the `where` argument doesn't exist, create a new CardType with this data.
     */
    create: XOR<CardTypeCreateInput, CardTypeUncheckedCreateInput>
    /**
     * In case the CardType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardTypeUpdateInput, CardTypeUncheckedUpdateInput>
  }

  /**
   * CardType delete
   */
  export type CardTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardType
     */
    select?: CardTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardTypeInclude<ExtArgs> | null
    /**
     * Filter which CardType to delete.
     */
    where: CardTypeWhereUniqueInput
  }

  /**
   * CardType deleteMany
   */
  export type CardTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardTypes to delete
     */
    where?: CardTypeWhereInput
  }

  /**
   * CardType.cards
   */
  export type CardType$cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    where?: CardWhereInput
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    cursor?: CardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * CardType without action
   */
  export type CardTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardType
     */
    select?: CardTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardTypeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DeckScalarFieldEnum: {
    id: 'id',
    title: 'title'
  };

  export type DeckScalarFieldEnum = (typeof DeckScalarFieldEnum)[keyof typeof DeckScalarFieldEnum]


  export const SlideScalarFieldEnum: {
    id: 'id',
    title: 'title',
    deck: 'deck'
  };

  export type SlideScalarFieldEnum = (typeof SlideScalarFieldEnum)[keyof typeof SlideScalarFieldEnum]


  export const CardScalarFieldEnum: {
    id: 'id',
    type: 'type',
    tags: 'tags',
    data: 'data',
    slide: 'slide'
  };

  export type CardScalarFieldEnum = (typeof CardScalarFieldEnum)[keyof typeof CardScalarFieldEnum]


  export const CardTypeScalarFieldEnum: {
    type: 'type'
  };

  export type CardTypeScalarFieldEnum = (typeof CardTypeScalarFieldEnum)[keyof typeof CardTypeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type DeckWhereInput = {
    AND?: DeckWhereInput | DeckWhereInput[]
    OR?: DeckWhereInput[]
    NOT?: DeckWhereInput | DeckWhereInput[]
    id?: StringFilter<"Deck"> | string
    title?: StringFilter<"Deck"> | string
    slides?: SlideListRelationFilter
  }

  export type DeckOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slides?: SlideOrderByRelationAggregateInput
  }

  export type DeckWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeckWhereInput | DeckWhereInput[]
    OR?: DeckWhereInput[]
    NOT?: DeckWhereInput | DeckWhereInput[]
    title?: StringFilter<"Deck"> | string
    slides?: SlideListRelationFilter
  }, "id">

  export type DeckOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    _count?: DeckCountOrderByAggregateInput
    _max?: DeckMaxOrderByAggregateInput
    _min?: DeckMinOrderByAggregateInput
  }

  export type DeckScalarWhereWithAggregatesInput = {
    AND?: DeckScalarWhereWithAggregatesInput | DeckScalarWhereWithAggregatesInput[]
    OR?: DeckScalarWhereWithAggregatesInput[]
    NOT?: DeckScalarWhereWithAggregatesInput | DeckScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Deck"> | string
    title?: StringWithAggregatesFilter<"Deck"> | string
  }

  export type SlideWhereInput = {
    AND?: SlideWhereInput | SlideWhereInput[]
    OR?: SlideWhereInput[]
    NOT?: SlideWhereInput | SlideWhereInput[]
    id?: StringFilter<"Slide"> | string
    title?: StringFilter<"Slide"> | string
    deck?: StringFilter<"Slide"> | string
    Deck?: XOR<DeckRelationFilter, DeckWhereInput>
    cards?: CardListRelationFilter
  }

  export type SlideOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    deck?: SortOrder
    Deck?: DeckOrderByWithRelationInput
    cards?: CardOrderByRelationAggregateInput
  }

  export type SlideWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SlideWhereInput | SlideWhereInput[]
    OR?: SlideWhereInput[]
    NOT?: SlideWhereInput | SlideWhereInput[]
    title?: StringFilter<"Slide"> | string
    deck?: StringFilter<"Slide"> | string
    Deck?: XOR<DeckRelationFilter, DeckWhereInput>
    cards?: CardListRelationFilter
  }, "id">

  export type SlideOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    deck?: SortOrder
    _count?: SlideCountOrderByAggregateInput
    _max?: SlideMaxOrderByAggregateInput
    _min?: SlideMinOrderByAggregateInput
  }

  export type SlideScalarWhereWithAggregatesInput = {
    AND?: SlideScalarWhereWithAggregatesInput | SlideScalarWhereWithAggregatesInput[]
    OR?: SlideScalarWhereWithAggregatesInput[]
    NOT?: SlideScalarWhereWithAggregatesInput | SlideScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Slide"> | string
    title?: StringWithAggregatesFilter<"Slide"> | string
    deck?: StringWithAggregatesFilter<"Slide"> | string
  }

  export type CardWhereInput = {
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    id?: StringFilter<"Card"> | string
    type?: StringFilter<"Card"> | string
    tags?: StringFilter<"Card"> | string
    data?: StringFilter<"Card"> | string
    slide?: StringFilter<"Card"> | string
    CardType?: XOR<CardTypeRelationFilter, CardTypeWhereInput>
    Slide?: XOR<SlideRelationFilter, SlideWhereInput>
  }

  export type CardOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    tags?: SortOrder
    data?: SortOrder
    slide?: SortOrder
    CardType?: CardTypeOrderByWithRelationInput
    Slide?: SlideOrderByWithRelationInput
  }

  export type CardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    type?: StringFilter<"Card"> | string
    tags?: StringFilter<"Card"> | string
    data?: StringFilter<"Card"> | string
    slide?: StringFilter<"Card"> | string
    CardType?: XOR<CardTypeRelationFilter, CardTypeWhereInput>
    Slide?: XOR<SlideRelationFilter, SlideWhereInput>
  }, "id">

  export type CardOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    tags?: SortOrder
    data?: SortOrder
    slide?: SortOrder
    _count?: CardCountOrderByAggregateInput
    _max?: CardMaxOrderByAggregateInput
    _min?: CardMinOrderByAggregateInput
  }

  export type CardScalarWhereWithAggregatesInput = {
    AND?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    OR?: CardScalarWhereWithAggregatesInput[]
    NOT?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Card"> | string
    type?: StringWithAggregatesFilter<"Card"> | string
    tags?: StringWithAggregatesFilter<"Card"> | string
    data?: StringWithAggregatesFilter<"Card"> | string
    slide?: StringWithAggregatesFilter<"Card"> | string
  }

  export type CardTypeWhereInput = {
    AND?: CardTypeWhereInput | CardTypeWhereInput[]
    OR?: CardTypeWhereInput[]
    NOT?: CardTypeWhereInput | CardTypeWhereInput[]
    type?: StringFilter<"CardType"> | string
    cards?: CardListRelationFilter
  }

  export type CardTypeOrderByWithRelationInput = {
    type?: SortOrder
    cards?: CardOrderByRelationAggregateInput
  }

  export type CardTypeWhereUniqueInput = Prisma.AtLeast<{
    type?: string
    AND?: CardTypeWhereInput | CardTypeWhereInput[]
    OR?: CardTypeWhereInput[]
    NOT?: CardTypeWhereInput | CardTypeWhereInput[]
    cards?: CardListRelationFilter
  }, "type">

  export type CardTypeOrderByWithAggregationInput = {
    type?: SortOrder
    _count?: CardTypeCountOrderByAggregateInput
    _max?: CardTypeMaxOrderByAggregateInput
    _min?: CardTypeMinOrderByAggregateInput
  }

  export type CardTypeScalarWhereWithAggregatesInput = {
    AND?: CardTypeScalarWhereWithAggregatesInput | CardTypeScalarWhereWithAggregatesInput[]
    OR?: CardTypeScalarWhereWithAggregatesInput[]
    NOT?: CardTypeScalarWhereWithAggregatesInput | CardTypeScalarWhereWithAggregatesInput[]
    type?: StringWithAggregatesFilter<"CardType"> | string
  }

  export type DeckCreateInput = {
    id: string
    title: string
    slides?: SlideCreateNestedManyWithoutDeckInput
  }

  export type DeckUncheckedCreateInput = {
    id: string
    title: string
    slides?: SlideUncheckedCreateNestedManyWithoutDeckInput
  }

  export type DeckUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slides?: SlideUpdateManyWithoutDeckNestedInput
  }

  export type DeckUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slides?: SlideUncheckedUpdateManyWithoutDeckNestedInput
  }

  export type DeckCreateManyInput = {
    id: string
    title: string
  }

  export type DeckUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type DeckUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type SlideCreateInput = {
    id: string
    title: string
    Deck: DeckCreateNestedOneWithoutSlidesInput
    cards?: CardCreateNestedManyWithoutSlideInput
  }

  export type SlideUncheckedCreateInput = {
    id: string
    title: string
    deck: string
    cards?: CardUncheckedCreateNestedManyWithoutSlideInput
  }

  export type SlideUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    Deck?: DeckUpdateOneRequiredWithoutSlidesNestedInput
    cards?: CardUpdateManyWithoutSlideNestedInput
  }

  export type SlideUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deck?: StringFieldUpdateOperationsInput | string
    cards?: CardUncheckedUpdateManyWithoutSlideNestedInput
  }

  export type SlideCreateManyInput = {
    id: string
    title: string
    deck: string
  }

  export type SlideUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type SlideUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deck?: StringFieldUpdateOperationsInput | string
  }

  export type CardCreateInput = {
    id: string
    tags: string
    data: string
    CardType: CardTypeCreateNestedOneWithoutCardsInput
    Slide: SlideCreateNestedOneWithoutCardsInput
  }

  export type CardUncheckedCreateInput = {
    id: string
    type: string
    tags: string
    data: string
    slide: string
  }

  export type CardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    CardType?: CardTypeUpdateOneRequiredWithoutCardsNestedInput
    Slide?: SlideUpdateOneRequiredWithoutCardsNestedInput
  }

  export type CardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    slide?: StringFieldUpdateOperationsInput | string
  }

  export type CardCreateManyInput = {
    id: string
    type: string
    tags: string
    data: string
    slide: string
  }

  export type CardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
  }

  export type CardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    slide?: StringFieldUpdateOperationsInput | string
  }

  export type CardTypeCreateInput = {
    type: string
    cards?: CardCreateNestedManyWithoutCardTypeInput
  }

  export type CardTypeUncheckedCreateInput = {
    type: string
    cards?: CardUncheckedCreateNestedManyWithoutCardTypeInput
  }

  export type CardTypeUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    cards?: CardUpdateManyWithoutCardTypeNestedInput
  }

  export type CardTypeUncheckedUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    cards?: CardUncheckedUpdateManyWithoutCardTypeNestedInput
  }

  export type CardTypeCreateManyInput = {
    type: string
  }

  export type CardTypeUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
  }

  export type CardTypeUncheckedUpdateManyInput = {
    type?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SlideListRelationFilter = {
    every?: SlideWhereInput
    some?: SlideWhereInput
    none?: SlideWhereInput
  }

  export type SlideOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeckCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type DeckMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type DeckMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DeckRelationFilter = {
    is?: DeckWhereInput
    isNot?: DeckWhereInput
  }

  export type CardListRelationFilter = {
    every?: CardWhereInput
    some?: CardWhereInput
    none?: CardWhereInput
  }

  export type CardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SlideCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    deck?: SortOrder
  }

  export type SlideMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    deck?: SortOrder
  }

  export type SlideMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    deck?: SortOrder
  }

  export type CardTypeRelationFilter = {
    is?: CardTypeWhereInput
    isNot?: CardTypeWhereInput
  }

  export type SlideRelationFilter = {
    is?: SlideWhereInput
    isNot?: SlideWhereInput
  }

  export type CardCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    tags?: SortOrder
    data?: SortOrder
    slide?: SortOrder
  }

  export type CardMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    tags?: SortOrder
    data?: SortOrder
    slide?: SortOrder
  }

  export type CardMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    tags?: SortOrder
    data?: SortOrder
    slide?: SortOrder
  }

  export type CardTypeCountOrderByAggregateInput = {
    type?: SortOrder
  }

  export type CardTypeMaxOrderByAggregateInput = {
    type?: SortOrder
  }

  export type CardTypeMinOrderByAggregateInput = {
    type?: SortOrder
  }

  export type SlideCreateNestedManyWithoutDeckInput = {
    create?: XOR<SlideCreateWithoutDeckInput, SlideUncheckedCreateWithoutDeckInput> | SlideCreateWithoutDeckInput[] | SlideUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: SlideCreateOrConnectWithoutDeckInput | SlideCreateOrConnectWithoutDeckInput[]
    createMany?: SlideCreateManyDeckInputEnvelope
    connect?: SlideWhereUniqueInput | SlideWhereUniqueInput[]
  }

  export type SlideUncheckedCreateNestedManyWithoutDeckInput = {
    create?: XOR<SlideCreateWithoutDeckInput, SlideUncheckedCreateWithoutDeckInput> | SlideCreateWithoutDeckInput[] | SlideUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: SlideCreateOrConnectWithoutDeckInput | SlideCreateOrConnectWithoutDeckInput[]
    createMany?: SlideCreateManyDeckInputEnvelope
    connect?: SlideWhereUniqueInput | SlideWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SlideUpdateManyWithoutDeckNestedInput = {
    create?: XOR<SlideCreateWithoutDeckInput, SlideUncheckedCreateWithoutDeckInput> | SlideCreateWithoutDeckInput[] | SlideUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: SlideCreateOrConnectWithoutDeckInput | SlideCreateOrConnectWithoutDeckInput[]
    upsert?: SlideUpsertWithWhereUniqueWithoutDeckInput | SlideUpsertWithWhereUniqueWithoutDeckInput[]
    createMany?: SlideCreateManyDeckInputEnvelope
    set?: SlideWhereUniqueInput | SlideWhereUniqueInput[]
    disconnect?: SlideWhereUniqueInput | SlideWhereUniqueInput[]
    delete?: SlideWhereUniqueInput | SlideWhereUniqueInput[]
    connect?: SlideWhereUniqueInput | SlideWhereUniqueInput[]
    update?: SlideUpdateWithWhereUniqueWithoutDeckInput | SlideUpdateWithWhereUniqueWithoutDeckInput[]
    updateMany?: SlideUpdateManyWithWhereWithoutDeckInput | SlideUpdateManyWithWhereWithoutDeckInput[]
    deleteMany?: SlideScalarWhereInput | SlideScalarWhereInput[]
  }

  export type SlideUncheckedUpdateManyWithoutDeckNestedInput = {
    create?: XOR<SlideCreateWithoutDeckInput, SlideUncheckedCreateWithoutDeckInput> | SlideCreateWithoutDeckInput[] | SlideUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: SlideCreateOrConnectWithoutDeckInput | SlideCreateOrConnectWithoutDeckInput[]
    upsert?: SlideUpsertWithWhereUniqueWithoutDeckInput | SlideUpsertWithWhereUniqueWithoutDeckInput[]
    createMany?: SlideCreateManyDeckInputEnvelope
    set?: SlideWhereUniqueInput | SlideWhereUniqueInput[]
    disconnect?: SlideWhereUniqueInput | SlideWhereUniqueInput[]
    delete?: SlideWhereUniqueInput | SlideWhereUniqueInput[]
    connect?: SlideWhereUniqueInput | SlideWhereUniqueInput[]
    update?: SlideUpdateWithWhereUniqueWithoutDeckInput | SlideUpdateWithWhereUniqueWithoutDeckInput[]
    updateMany?: SlideUpdateManyWithWhereWithoutDeckInput | SlideUpdateManyWithWhereWithoutDeckInput[]
    deleteMany?: SlideScalarWhereInput | SlideScalarWhereInput[]
  }

  export type DeckCreateNestedOneWithoutSlidesInput = {
    create?: XOR<DeckCreateWithoutSlidesInput, DeckUncheckedCreateWithoutSlidesInput>
    connectOrCreate?: DeckCreateOrConnectWithoutSlidesInput
    connect?: DeckWhereUniqueInput
  }

  export type CardCreateNestedManyWithoutSlideInput = {
    create?: XOR<CardCreateWithoutSlideInput, CardUncheckedCreateWithoutSlideInput> | CardCreateWithoutSlideInput[] | CardUncheckedCreateWithoutSlideInput[]
    connectOrCreate?: CardCreateOrConnectWithoutSlideInput | CardCreateOrConnectWithoutSlideInput[]
    createMany?: CardCreateManySlideInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type CardUncheckedCreateNestedManyWithoutSlideInput = {
    create?: XOR<CardCreateWithoutSlideInput, CardUncheckedCreateWithoutSlideInput> | CardCreateWithoutSlideInput[] | CardUncheckedCreateWithoutSlideInput[]
    connectOrCreate?: CardCreateOrConnectWithoutSlideInput | CardCreateOrConnectWithoutSlideInput[]
    createMany?: CardCreateManySlideInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type DeckUpdateOneRequiredWithoutSlidesNestedInput = {
    create?: XOR<DeckCreateWithoutSlidesInput, DeckUncheckedCreateWithoutSlidesInput>
    connectOrCreate?: DeckCreateOrConnectWithoutSlidesInput
    upsert?: DeckUpsertWithoutSlidesInput
    connect?: DeckWhereUniqueInput
    update?: XOR<XOR<DeckUpdateToOneWithWhereWithoutSlidesInput, DeckUpdateWithoutSlidesInput>, DeckUncheckedUpdateWithoutSlidesInput>
  }

  export type CardUpdateManyWithoutSlideNestedInput = {
    create?: XOR<CardCreateWithoutSlideInput, CardUncheckedCreateWithoutSlideInput> | CardCreateWithoutSlideInput[] | CardUncheckedCreateWithoutSlideInput[]
    connectOrCreate?: CardCreateOrConnectWithoutSlideInput | CardCreateOrConnectWithoutSlideInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutSlideInput | CardUpsertWithWhereUniqueWithoutSlideInput[]
    createMany?: CardCreateManySlideInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutSlideInput | CardUpdateWithWhereUniqueWithoutSlideInput[]
    updateMany?: CardUpdateManyWithWhereWithoutSlideInput | CardUpdateManyWithWhereWithoutSlideInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type CardUncheckedUpdateManyWithoutSlideNestedInput = {
    create?: XOR<CardCreateWithoutSlideInput, CardUncheckedCreateWithoutSlideInput> | CardCreateWithoutSlideInput[] | CardUncheckedCreateWithoutSlideInput[]
    connectOrCreate?: CardCreateOrConnectWithoutSlideInput | CardCreateOrConnectWithoutSlideInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutSlideInput | CardUpsertWithWhereUniqueWithoutSlideInput[]
    createMany?: CardCreateManySlideInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutSlideInput | CardUpdateWithWhereUniqueWithoutSlideInput[]
    updateMany?: CardUpdateManyWithWhereWithoutSlideInput | CardUpdateManyWithWhereWithoutSlideInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type CardTypeCreateNestedOneWithoutCardsInput = {
    create?: XOR<CardTypeCreateWithoutCardsInput, CardTypeUncheckedCreateWithoutCardsInput>
    connectOrCreate?: CardTypeCreateOrConnectWithoutCardsInput
    connect?: CardTypeWhereUniqueInput
  }

  export type SlideCreateNestedOneWithoutCardsInput = {
    create?: XOR<SlideCreateWithoutCardsInput, SlideUncheckedCreateWithoutCardsInput>
    connectOrCreate?: SlideCreateOrConnectWithoutCardsInput
    connect?: SlideWhereUniqueInput
  }

  export type CardTypeUpdateOneRequiredWithoutCardsNestedInput = {
    create?: XOR<CardTypeCreateWithoutCardsInput, CardTypeUncheckedCreateWithoutCardsInput>
    connectOrCreate?: CardTypeCreateOrConnectWithoutCardsInput
    upsert?: CardTypeUpsertWithoutCardsInput
    connect?: CardTypeWhereUniqueInput
    update?: XOR<XOR<CardTypeUpdateToOneWithWhereWithoutCardsInput, CardTypeUpdateWithoutCardsInput>, CardTypeUncheckedUpdateWithoutCardsInput>
  }

  export type SlideUpdateOneRequiredWithoutCardsNestedInput = {
    create?: XOR<SlideCreateWithoutCardsInput, SlideUncheckedCreateWithoutCardsInput>
    connectOrCreate?: SlideCreateOrConnectWithoutCardsInput
    upsert?: SlideUpsertWithoutCardsInput
    connect?: SlideWhereUniqueInput
    update?: XOR<XOR<SlideUpdateToOneWithWhereWithoutCardsInput, SlideUpdateWithoutCardsInput>, SlideUncheckedUpdateWithoutCardsInput>
  }

  export type CardCreateNestedManyWithoutCardTypeInput = {
    create?: XOR<CardCreateWithoutCardTypeInput, CardUncheckedCreateWithoutCardTypeInput> | CardCreateWithoutCardTypeInput[] | CardUncheckedCreateWithoutCardTypeInput[]
    connectOrCreate?: CardCreateOrConnectWithoutCardTypeInput | CardCreateOrConnectWithoutCardTypeInput[]
    createMany?: CardCreateManyCardTypeInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type CardUncheckedCreateNestedManyWithoutCardTypeInput = {
    create?: XOR<CardCreateWithoutCardTypeInput, CardUncheckedCreateWithoutCardTypeInput> | CardCreateWithoutCardTypeInput[] | CardUncheckedCreateWithoutCardTypeInput[]
    connectOrCreate?: CardCreateOrConnectWithoutCardTypeInput | CardCreateOrConnectWithoutCardTypeInput[]
    createMany?: CardCreateManyCardTypeInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type CardUpdateManyWithoutCardTypeNestedInput = {
    create?: XOR<CardCreateWithoutCardTypeInput, CardUncheckedCreateWithoutCardTypeInput> | CardCreateWithoutCardTypeInput[] | CardUncheckedCreateWithoutCardTypeInput[]
    connectOrCreate?: CardCreateOrConnectWithoutCardTypeInput | CardCreateOrConnectWithoutCardTypeInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutCardTypeInput | CardUpsertWithWhereUniqueWithoutCardTypeInput[]
    createMany?: CardCreateManyCardTypeInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutCardTypeInput | CardUpdateWithWhereUniqueWithoutCardTypeInput[]
    updateMany?: CardUpdateManyWithWhereWithoutCardTypeInput | CardUpdateManyWithWhereWithoutCardTypeInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type CardUncheckedUpdateManyWithoutCardTypeNestedInput = {
    create?: XOR<CardCreateWithoutCardTypeInput, CardUncheckedCreateWithoutCardTypeInput> | CardCreateWithoutCardTypeInput[] | CardUncheckedCreateWithoutCardTypeInput[]
    connectOrCreate?: CardCreateOrConnectWithoutCardTypeInput | CardCreateOrConnectWithoutCardTypeInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutCardTypeInput | CardUpsertWithWhereUniqueWithoutCardTypeInput[]
    createMany?: CardCreateManyCardTypeInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutCardTypeInput | CardUpdateWithWhereUniqueWithoutCardTypeInput[]
    updateMany?: CardUpdateManyWithWhereWithoutCardTypeInput | CardUpdateManyWithWhereWithoutCardTypeInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SlideCreateWithoutDeckInput = {
    id: string
    title: string
    cards?: CardCreateNestedManyWithoutSlideInput
  }

  export type SlideUncheckedCreateWithoutDeckInput = {
    id: string
    title: string
    cards?: CardUncheckedCreateNestedManyWithoutSlideInput
  }

  export type SlideCreateOrConnectWithoutDeckInput = {
    where: SlideWhereUniqueInput
    create: XOR<SlideCreateWithoutDeckInput, SlideUncheckedCreateWithoutDeckInput>
  }

  export type SlideCreateManyDeckInputEnvelope = {
    data: SlideCreateManyDeckInput | SlideCreateManyDeckInput[]
  }

  export type SlideUpsertWithWhereUniqueWithoutDeckInput = {
    where: SlideWhereUniqueInput
    update: XOR<SlideUpdateWithoutDeckInput, SlideUncheckedUpdateWithoutDeckInput>
    create: XOR<SlideCreateWithoutDeckInput, SlideUncheckedCreateWithoutDeckInput>
  }

  export type SlideUpdateWithWhereUniqueWithoutDeckInput = {
    where: SlideWhereUniqueInput
    data: XOR<SlideUpdateWithoutDeckInput, SlideUncheckedUpdateWithoutDeckInput>
  }

  export type SlideUpdateManyWithWhereWithoutDeckInput = {
    where: SlideScalarWhereInput
    data: XOR<SlideUpdateManyMutationInput, SlideUncheckedUpdateManyWithoutDeckInput>
  }

  export type SlideScalarWhereInput = {
    AND?: SlideScalarWhereInput | SlideScalarWhereInput[]
    OR?: SlideScalarWhereInput[]
    NOT?: SlideScalarWhereInput | SlideScalarWhereInput[]
    id?: StringFilter<"Slide"> | string
    title?: StringFilter<"Slide"> | string
    deck?: StringFilter<"Slide"> | string
  }

  export type DeckCreateWithoutSlidesInput = {
    id: string
    title: string
  }

  export type DeckUncheckedCreateWithoutSlidesInput = {
    id: string
    title: string
  }

  export type DeckCreateOrConnectWithoutSlidesInput = {
    where: DeckWhereUniqueInput
    create: XOR<DeckCreateWithoutSlidesInput, DeckUncheckedCreateWithoutSlidesInput>
  }

  export type CardCreateWithoutSlideInput = {
    id: string
    tags: string
    data: string
    CardType: CardTypeCreateNestedOneWithoutCardsInput
  }

  export type CardUncheckedCreateWithoutSlideInput = {
    id: string
    type: string
    tags: string
    data: string
  }

  export type CardCreateOrConnectWithoutSlideInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutSlideInput, CardUncheckedCreateWithoutSlideInput>
  }

  export type CardCreateManySlideInputEnvelope = {
    data: CardCreateManySlideInput | CardCreateManySlideInput[]
  }

  export type DeckUpsertWithoutSlidesInput = {
    update: XOR<DeckUpdateWithoutSlidesInput, DeckUncheckedUpdateWithoutSlidesInput>
    create: XOR<DeckCreateWithoutSlidesInput, DeckUncheckedCreateWithoutSlidesInput>
    where?: DeckWhereInput
  }

  export type DeckUpdateToOneWithWhereWithoutSlidesInput = {
    where?: DeckWhereInput
    data: XOR<DeckUpdateWithoutSlidesInput, DeckUncheckedUpdateWithoutSlidesInput>
  }

  export type DeckUpdateWithoutSlidesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type DeckUncheckedUpdateWithoutSlidesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type CardUpsertWithWhereUniqueWithoutSlideInput = {
    where: CardWhereUniqueInput
    update: XOR<CardUpdateWithoutSlideInput, CardUncheckedUpdateWithoutSlideInput>
    create: XOR<CardCreateWithoutSlideInput, CardUncheckedCreateWithoutSlideInput>
  }

  export type CardUpdateWithWhereUniqueWithoutSlideInput = {
    where: CardWhereUniqueInput
    data: XOR<CardUpdateWithoutSlideInput, CardUncheckedUpdateWithoutSlideInput>
  }

  export type CardUpdateManyWithWhereWithoutSlideInput = {
    where: CardScalarWhereInput
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyWithoutSlideInput>
  }

  export type CardScalarWhereInput = {
    AND?: CardScalarWhereInput | CardScalarWhereInput[]
    OR?: CardScalarWhereInput[]
    NOT?: CardScalarWhereInput | CardScalarWhereInput[]
    id?: StringFilter<"Card"> | string
    type?: StringFilter<"Card"> | string
    tags?: StringFilter<"Card"> | string
    data?: StringFilter<"Card"> | string
    slide?: StringFilter<"Card"> | string
  }

  export type CardTypeCreateWithoutCardsInput = {
    type: string
  }

  export type CardTypeUncheckedCreateWithoutCardsInput = {
    type: string
  }

  export type CardTypeCreateOrConnectWithoutCardsInput = {
    where: CardTypeWhereUniqueInput
    create: XOR<CardTypeCreateWithoutCardsInput, CardTypeUncheckedCreateWithoutCardsInput>
  }

  export type SlideCreateWithoutCardsInput = {
    id: string
    title: string
    Deck: DeckCreateNestedOneWithoutSlidesInput
  }

  export type SlideUncheckedCreateWithoutCardsInput = {
    id: string
    title: string
    deck: string
  }

  export type SlideCreateOrConnectWithoutCardsInput = {
    where: SlideWhereUniqueInput
    create: XOR<SlideCreateWithoutCardsInput, SlideUncheckedCreateWithoutCardsInput>
  }

  export type CardTypeUpsertWithoutCardsInput = {
    update: XOR<CardTypeUpdateWithoutCardsInput, CardTypeUncheckedUpdateWithoutCardsInput>
    create: XOR<CardTypeCreateWithoutCardsInput, CardTypeUncheckedCreateWithoutCardsInput>
    where?: CardTypeWhereInput
  }

  export type CardTypeUpdateToOneWithWhereWithoutCardsInput = {
    where?: CardTypeWhereInput
    data: XOR<CardTypeUpdateWithoutCardsInput, CardTypeUncheckedUpdateWithoutCardsInput>
  }

  export type CardTypeUpdateWithoutCardsInput = {
    type?: StringFieldUpdateOperationsInput | string
  }

  export type CardTypeUncheckedUpdateWithoutCardsInput = {
    type?: StringFieldUpdateOperationsInput | string
  }

  export type SlideUpsertWithoutCardsInput = {
    update: XOR<SlideUpdateWithoutCardsInput, SlideUncheckedUpdateWithoutCardsInput>
    create: XOR<SlideCreateWithoutCardsInput, SlideUncheckedCreateWithoutCardsInput>
    where?: SlideWhereInput
  }

  export type SlideUpdateToOneWithWhereWithoutCardsInput = {
    where?: SlideWhereInput
    data: XOR<SlideUpdateWithoutCardsInput, SlideUncheckedUpdateWithoutCardsInput>
  }

  export type SlideUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    Deck?: DeckUpdateOneRequiredWithoutSlidesNestedInput
  }

  export type SlideUncheckedUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    deck?: StringFieldUpdateOperationsInput | string
  }

  export type CardCreateWithoutCardTypeInput = {
    id: string
    tags: string
    data: string
    Slide: SlideCreateNestedOneWithoutCardsInput
  }

  export type CardUncheckedCreateWithoutCardTypeInput = {
    id: string
    tags: string
    data: string
    slide: string
  }

  export type CardCreateOrConnectWithoutCardTypeInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutCardTypeInput, CardUncheckedCreateWithoutCardTypeInput>
  }

  export type CardCreateManyCardTypeInputEnvelope = {
    data: CardCreateManyCardTypeInput | CardCreateManyCardTypeInput[]
  }

  export type CardUpsertWithWhereUniqueWithoutCardTypeInput = {
    where: CardWhereUniqueInput
    update: XOR<CardUpdateWithoutCardTypeInput, CardUncheckedUpdateWithoutCardTypeInput>
    create: XOR<CardCreateWithoutCardTypeInput, CardUncheckedCreateWithoutCardTypeInput>
  }

  export type CardUpdateWithWhereUniqueWithoutCardTypeInput = {
    where: CardWhereUniqueInput
    data: XOR<CardUpdateWithoutCardTypeInput, CardUncheckedUpdateWithoutCardTypeInput>
  }

  export type CardUpdateManyWithWhereWithoutCardTypeInput = {
    where: CardScalarWhereInput
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyWithoutCardTypeInput>
  }

  export type SlideCreateManyDeckInput = {
    id: string
    title: string
  }

  export type SlideUpdateWithoutDeckInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cards?: CardUpdateManyWithoutSlideNestedInput
  }

  export type SlideUncheckedUpdateWithoutDeckInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cards?: CardUncheckedUpdateManyWithoutSlideNestedInput
  }

  export type SlideUncheckedUpdateManyWithoutDeckInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type CardCreateManySlideInput = {
    id: string
    type: string
    tags: string
    data: string
  }

  export type CardUpdateWithoutSlideInput = {
    id?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    CardType?: CardTypeUpdateOneRequiredWithoutCardsNestedInput
  }

  export type CardUncheckedUpdateWithoutSlideInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
  }

  export type CardUncheckedUpdateManyWithoutSlideInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
  }

  export type CardCreateManyCardTypeInput = {
    id: string
    tags: string
    data: string
    slide: string
  }

  export type CardUpdateWithoutCardTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    Slide?: SlideUpdateOneRequiredWithoutCardsNestedInput
  }

  export type CardUncheckedUpdateWithoutCardTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    slide?: StringFieldUpdateOperationsInput | string
  }

  export type CardUncheckedUpdateManyWithoutCardTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    slide?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use DeckCountOutputTypeDefaultArgs instead
     */
    export type DeckCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeckCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SlideCountOutputTypeDefaultArgs instead
     */
    export type SlideCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SlideCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CardTypeCountOutputTypeDefaultArgs instead
     */
    export type CardTypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CardTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeckDefaultArgs instead
     */
    export type DeckArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeckDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SlideDefaultArgs instead
     */
    export type SlideArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SlideDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CardDefaultArgs instead
     */
    export type CardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CardDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CardTypeDefaultArgs instead
     */
    export type CardTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CardTypeDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}