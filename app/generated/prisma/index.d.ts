
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
 * Model Compromiso
 * 
 */
export type Compromiso = $Result.DefaultSelection<Prisma.$CompromisoPayload>
/**
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model Noticia
 * 
 */
export type Noticia = $Result.DefaultSelection<Prisma.$NoticiaPayload>
/**
 * Model Material
 * 
 */
export type Material = $Result.DefaultSelection<Prisma.$MaterialPayload>
/**
 * Model Config
 * 
 */
export type Config = $Result.DefaultSelection<Prisma.$ConfigPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Compromisos
 * const compromisos = await prisma.compromiso.findMany()
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
   * // Fetch zero or more Compromisos
   * const compromisos = await prisma.compromiso.findMany()
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
   * `prisma.compromiso`: Exposes CRUD operations for the **Compromiso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Compromisos
    * const compromisos = await prisma.compromiso.findMany()
    * ```
    */
  get compromiso(): Prisma.CompromisoDelegate<ExtArgs>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs>;

  /**
   * `prisma.noticia`: Exposes CRUD operations for the **Noticia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Noticias
    * const noticias = await prisma.noticia.findMany()
    * ```
    */
  get noticia(): Prisma.NoticiaDelegate<ExtArgs>;

  /**
   * `prisma.material`: Exposes CRUD operations for the **Material** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.material.findMany()
    * ```
    */
  get material(): Prisma.MaterialDelegate<ExtArgs>;

  /**
   * `prisma.config`: Exposes CRUD operations for the **Config** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configs
    * const configs = await prisma.config.findMany()
    * ```
    */
  get config(): Prisma.ConfigDelegate<ExtArgs>;
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
    Compromiso: 'Compromiso',
    Video: 'Video',
    Noticia: 'Noticia',
    Material: 'Material',
    Config: 'Config'
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
      modelProps: "compromiso" | "video" | "noticia" | "material" | "config"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Compromiso: {
        payload: Prisma.$CompromisoPayload<ExtArgs>
        fields: Prisma.CompromisoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompromisoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompromisoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompromisoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompromisoPayload>
          }
          findFirst: {
            args: Prisma.CompromisoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompromisoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompromisoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompromisoPayload>
          }
          findMany: {
            args: Prisma.CompromisoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompromisoPayload>[]
          }
          create: {
            args: Prisma.CompromisoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompromisoPayload>
          }
          createMany: {
            args: Prisma.CompromisoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CompromisoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompromisoPayload>
          }
          update: {
            args: Prisma.CompromisoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompromisoPayload>
          }
          deleteMany: {
            args: Prisma.CompromisoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompromisoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompromisoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompromisoPayload>
          }
          aggregate: {
            args: Prisma.CompromisoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompromiso>
          }
          groupBy: {
            args: Prisma.CompromisoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompromisoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompromisoCountArgs<ExtArgs>
            result: $Utils.Optional<CompromisoCountAggregateOutputType> | number
          }
        }
      }
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      Noticia: {
        payload: Prisma.$NoticiaPayload<ExtArgs>
        fields: Prisma.NoticiaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoticiaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoticiaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          findFirst: {
            args: Prisma.NoticiaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoticiaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          findMany: {
            args: Prisma.NoticiaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>[]
          }
          create: {
            args: Prisma.NoticiaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          createMany: {
            args: Prisma.NoticiaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NoticiaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          update: {
            args: Prisma.NoticiaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          deleteMany: {
            args: Prisma.NoticiaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoticiaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NoticiaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          aggregate: {
            args: Prisma.NoticiaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNoticia>
          }
          groupBy: {
            args: Prisma.NoticiaGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoticiaGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoticiaCountArgs<ExtArgs>
            result: $Utils.Optional<NoticiaCountAggregateOutputType> | number
          }
        }
      }
      Material: {
        payload: Prisma.$MaterialPayload<ExtArgs>
        fields: Prisma.MaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findFirst: {
            args: Prisma.MaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findMany: {
            args: Prisma.MaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          create: {
            args: Prisma.MaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          createMany: {
            args: Prisma.MaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          update: {
            args: Prisma.MaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          deleteMany: {
            args: Prisma.MaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          aggregate: {
            args: Prisma.MaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterial>
          }
          groupBy: {
            args: Prisma.MaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialCountAggregateOutputType> | number
          }
        }
      }
      Config: {
        payload: Prisma.$ConfigPayload<ExtArgs>
        fields: Prisma.ConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          findFirst: {
            args: Prisma.ConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          findMany: {
            args: Prisma.ConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>[]
          }
          create: {
            args: Prisma.ConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          createMany: {
            args: Prisma.ConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          update: {
            args: Prisma.ConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          deleteMany: {
            args: Prisma.ConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          aggregate: {
            args: Prisma.ConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfig>
          }
          groupBy: {
            args: Prisma.ConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfigCountArgs<ExtArgs>
            result: $Utils.Optional<ConfigCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model Compromiso
   */

  export type AggregateCompromiso = {
    _count: CompromisoCountAggregateOutputType | null
    _avg: CompromisoAvgAggregateOutputType | null
    _sum: CompromisoSumAggregateOutputType | null
    _min: CompromisoMinAggregateOutputType | null
    _max: CompromisoMaxAggregateOutputType | null
  }

  export type CompromisoAvgAggregateOutputType = {
    id: number | null
  }

  export type CompromisoSumAggregateOutputType = {
    id: number | null
  }

  export type CompromisoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    telefono: string | null
    mail: string | null
    colegio: string | null
    createdAt: Date | null
  }

  export type CompromisoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    telefono: string | null
    mail: string | null
    colegio: string | null
    createdAt: Date | null
  }

  export type CompromisoCountAggregateOutputType = {
    id: number
    nombre: number
    apellido: number
    telefono: number
    mail: number
    colegio: number
    createdAt: number
    _all: number
  }


  export type CompromisoAvgAggregateInputType = {
    id?: true
  }

  export type CompromisoSumAggregateInputType = {
    id?: true
  }

  export type CompromisoMinAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    telefono?: true
    mail?: true
    colegio?: true
    createdAt?: true
  }

  export type CompromisoMaxAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    telefono?: true
    mail?: true
    colegio?: true
    createdAt?: true
  }

  export type CompromisoCountAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    telefono?: true
    mail?: true
    colegio?: true
    createdAt?: true
    _all?: true
  }

  export type CompromisoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Compromiso to aggregate.
     */
    where?: CompromisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compromisos to fetch.
     */
    orderBy?: CompromisoOrderByWithRelationInput | CompromisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompromisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compromisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compromisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Compromisos
    **/
    _count?: true | CompromisoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompromisoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompromisoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompromisoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompromisoMaxAggregateInputType
  }

  export type GetCompromisoAggregateType<T extends CompromisoAggregateArgs> = {
        [P in keyof T & keyof AggregateCompromiso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompromiso[P]>
      : GetScalarType<T[P], AggregateCompromiso[P]>
  }




  export type CompromisoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompromisoWhereInput
    orderBy?: CompromisoOrderByWithAggregationInput | CompromisoOrderByWithAggregationInput[]
    by: CompromisoScalarFieldEnum[] | CompromisoScalarFieldEnum
    having?: CompromisoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompromisoCountAggregateInputType | true
    _avg?: CompromisoAvgAggregateInputType
    _sum?: CompromisoSumAggregateInputType
    _min?: CompromisoMinAggregateInputType
    _max?: CompromisoMaxAggregateInputType
  }

  export type CompromisoGroupByOutputType = {
    id: number
    nombre: string
    apellido: string
    telefono: string | null
    mail: string
    colegio: string | null
    createdAt: Date
    _count: CompromisoCountAggregateOutputType | null
    _avg: CompromisoAvgAggregateOutputType | null
    _sum: CompromisoSumAggregateOutputType | null
    _min: CompromisoMinAggregateOutputType | null
    _max: CompromisoMaxAggregateOutputType | null
  }

  type GetCompromisoGroupByPayload<T extends CompromisoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompromisoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompromisoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompromisoGroupByOutputType[P]>
            : GetScalarType<T[P], CompromisoGroupByOutputType[P]>
        }
      >
    >


  export type CompromisoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    telefono?: boolean
    mail?: boolean
    colegio?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["compromiso"]>


  export type CompromisoSelectScalar = {
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    telefono?: boolean
    mail?: boolean
    colegio?: boolean
    createdAt?: boolean
  }


  export type $CompromisoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Compromiso"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      apellido: string
      telefono: string | null
      mail: string
      colegio: string | null
      createdAt: Date
    }, ExtArgs["result"]["compromiso"]>
    composites: {}
  }

  type CompromisoGetPayload<S extends boolean | null | undefined | CompromisoDefaultArgs> = $Result.GetResult<Prisma.$CompromisoPayload, S>

  type CompromisoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompromisoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompromisoCountAggregateInputType | true
    }

  export interface CompromisoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Compromiso'], meta: { name: 'Compromiso' } }
    /**
     * Find zero or one Compromiso that matches the filter.
     * @param {CompromisoFindUniqueArgs} args - Arguments to find a Compromiso
     * @example
     * // Get one Compromiso
     * const compromiso = await prisma.compromiso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompromisoFindUniqueArgs>(args: SelectSubset<T, CompromisoFindUniqueArgs<ExtArgs>>): Prisma__CompromisoClient<$Result.GetResult<Prisma.$CompromisoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Compromiso that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CompromisoFindUniqueOrThrowArgs} args - Arguments to find a Compromiso
     * @example
     * // Get one Compromiso
     * const compromiso = await prisma.compromiso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompromisoFindUniqueOrThrowArgs>(args: SelectSubset<T, CompromisoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompromisoClient<$Result.GetResult<Prisma.$CompromisoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Compromiso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompromisoFindFirstArgs} args - Arguments to find a Compromiso
     * @example
     * // Get one Compromiso
     * const compromiso = await prisma.compromiso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompromisoFindFirstArgs>(args?: SelectSubset<T, CompromisoFindFirstArgs<ExtArgs>>): Prisma__CompromisoClient<$Result.GetResult<Prisma.$CompromisoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Compromiso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompromisoFindFirstOrThrowArgs} args - Arguments to find a Compromiso
     * @example
     * // Get one Compromiso
     * const compromiso = await prisma.compromiso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompromisoFindFirstOrThrowArgs>(args?: SelectSubset<T, CompromisoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompromisoClient<$Result.GetResult<Prisma.$CompromisoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Compromisos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompromisoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Compromisos
     * const compromisos = await prisma.compromiso.findMany()
     * 
     * // Get first 10 Compromisos
     * const compromisos = await prisma.compromiso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const compromisoWithIdOnly = await prisma.compromiso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompromisoFindManyArgs>(args?: SelectSubset<T, CompromisoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompromisoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Compromiso.
     * @param {CompromisoCreateArgs} args - Arguments to create a Compromiso.
     * @example
     * // Create one Compromiso
     * const Compromiso = await prisma.compromiso.create({
     *   data: {
     *     // ... data to create a Compromiso
     *   }
     * })
     * 
     */
    create<T extends CompromisoCreateArgs>(args: SelectSubset<T, CompromisoCreateArgs<ExtArgs>>): Prisma__CompromisoClient<$Result.GetResult<Prisma.$CompromisoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Compromisos.
     * @param {CompromisoCreateManyArgs} args - Arguments to create many Compromisos.
     * @example
     * // Create many Compromisos
     * const compromiso = await prisma.compromiso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompromisoCreateManyArgs>(args?: SelectSubset<T, CompromisoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Compromiso.
     * @param {CompromisoDeleteArgs} args - Arguments to delete one Compromiso.
     * @example
     * // Delete one Compromiso
     * const Compromiso = await prisma.compromiso.delete({
     *   where: {
     *     // ... filter to delete one Compromiso
     *   }
     * })
     * 
     */
    delete<T extends CompromisoDeleteArgs>(args: SelectSubset<T, CompromisoDeleteArgs<ExtArgs>>): Prisma__CompromisoClient<$Result.GetResult<Prisma.$CompromisoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Compromiso.
     * @param {CompromisoUpdateArgs} args - Arguments to update one Compromiso.
     * @example
     * // Update one Compromiso
     * const compromiso = await prisma.compromiso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompromisoUpdateArgs>(args: SelectSubset<T, CompromisoUpdateArgs<ExtArgs>>): Prisma__CompromisoClient<$Result.GetResult<Prisma.$CompromisoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Compromisos.
     * @param {CompromisoDeleteManyArgs} args - Arguments to filter Compromisos to delete.
     * @example
     * // Delete a few Compromisos
     * const { count } = await prisma.compromiso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompromisoDeleteManyArgs>(args?: SelectSubset<T, CompromisoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Compromisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompromisoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Compromisos
     * const compromiso = await prisma.compromiso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompromisoUpdateManyArgs>(args: SelectSubset<T, CompromisoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Compromiso.
     * @param {CompromisoUpsertArgs} args - Arguments to update or create a Compromiso.
     * @example
     * // Update or create a Compromiso
     * const compromiso = await prisma.compromiso.upsert({
     *   create: {
     *     // ... data to create a Compromiso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Compromiso we want to update
     *   }
     * })
     */
    upsert<T extends CompromisoUpsertArgs>(args: SelectSubset<T, CompromisoUpsertArgs<ExtArgs>>): Prisma__CompromisoClient<$Result.GetResult<Prisma.$CompromisoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Compromisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompromisoCountArgs} args - Arguments to filter Compromisos to count.
     * @example
     * // Count the number of Compromisos
     * const count = await prisma.compromiso.count({
     *   where: {
     *     // ... the filter for the Compromisos we want to count
     *   }
     * })
    **/
    count<T extends CompromisoCountArgs>(
      args?: Subset<T, CompromisoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompromisoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Compromiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompromisoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompromisoAggregateArgs>(args: Subset<T, CompromisoAggregateArgs>): Prisma.PrismaPromise<GetCompromisoAggregateType<T>>

    /**
     * Group by Compromiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompromisoGroupByArgs} args - Group by arguments.
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
      T extends CompromisoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompromisoGroupByArgs['orderBy'] }
        : { orderBy?: CompromisoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompromisoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompromisoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Compromiso model
   */
  readonly fields: CompromisoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Compromiso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompromisoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Compromiso model
   */ 
  interface CompromisoFieldRefs {
    readonly id: FieldRef<"Compromiso", 'Int'>
    readonly nombre: FieldRef<"Compromiso", 'String'>
    readonly apellido: FieldRef<"Compromiso", 'String'>
    readonly telefono: FieldRef<"Compromiso", 'String'>
    readonly mail: FieldRef<"Compromiso", 'String'>
    readonly colegio: FieldRef<"Compromiso", 'String'>
    readonly createdAt: FieldRef<"Compromiso", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Compromiso findUnique
   */
  export type CompromisoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compromiso
     */
    select?: CompromisoSelect<ExtArgs> | null
    /**
     * Filter, which Compromiso to fetch.
     */
    where: CompromisoWhereUniqueInput
  }

  /**
   * Compromiso findUniqueOrThrow
   */
  export type CompromisoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compromiso
     */
    select?: CompromisoSelect<ExtArgs> | null
    /**
     * Filter, which Compromiso to fetch.
     */
    where: CompromisoWhereUniqueInput
  }

  /**
   * Compromiso findFirst
   */
  export type CompromisoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compromiso
     */
    select?: CompromisoSelect<ExtArgs> | null
    /**
     * Filter, which Compromiso to fetch.
     */
    where?: CompromisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compromisos to fetch.
     */
    orderBy?: CompromisoOrderByWithRelationInput | CompromisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Compromisos.
     */
    cursor?: CompromisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compromisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compromisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Compromisos.
     */
    distinct?: CompromisoScalarFieldEnum | CompromisoScalarFieldEnum[]
  }

  /**
   * Compromiso findFirstOrThrow
   */
  export type CompromisoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compromiso
     */
    select?: CompromisoSelect<ExtArgs> | null
    /**
     * Filter, which Compromiso to fetch.
     */
    where?: CompromisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compromisos to fetch.
     */
    orderBy?: CompromisoOrderByWithRelationInput | CompromisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Compromisos.
     */
    cursor?: CompromisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compromisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compromisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Compromisos.
     */
    distinct?: CompromisoScalarFieldEnum | CompromisoScalarFieldEnum[]
  }

  /**
   * Compromiso findMany
   */
  export type CompromisoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compromiso
     */
    select?: CompromisoSelect<ExtArgs> | null
    /**
     * Filter, which Compromisos to fetch.
     */
    where?: CompromisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compromisos to fetch.
     */
    orderBy?: CompromisoOrderByWithRelationInput | CompromisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Compromisos.
     */
    cursor?: CompromisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compromisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compromisos.
     */
    skip?: number
    distinct?: CompromisoScalarFieldEnum | CompromisoScalarFieldEnum[]
  }

  /**
   * Compromiso create
   */
  export type CompromisoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compromiso
     */
    select?: CompromisoSelect<ExtArgs> | null
    /**
     * The data needed to create a Compromiso.
     */
    data: XOR<CompromisoCreateInput, CompromisoUncheckedCreateInput>
  }

  /**
   * Compromiso createMany
   */
  export type CompromisoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Compromisos.
     */
    data: CompromisoCreateManyInput | CompromisoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Compromiso update
   */
  export type CompromisoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compromiso
     */
    select?: CompromisoSelect<ExtArgs> | null
    /**
     * The data needed to update a Compromiso.
     */
    data: XOR<CompromisoUpdateInput, CompromisoUncheckedUpdateInput>
    /**
     * Choose, which Compromiso to update.
     */
    where: CompromisoWhereUniqueInput
  }

  /**
   * Compromiso updateMany
   */
  export type CompromisoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Compromisos.
     */
    data: XOR<CompromisoUpdateManyMutationInput, CompromisoUncheckedUpdateManyInput>
    /**
     * Filter which Compromisos to update
     */
    where?: CompromisoWhereInput
  }

  /**
   * Compromiso upsert
   */
  export type CompromisoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compromiso
     */
    select?: CompromisoSelect<ExtArgs> | null
    /**
     * The filter to search for the Compromiso to update in case it exists.
     */
    where: CompromisoWhereUniqueInput
    /**
     * In case the Compromiso found by the `where` argument doesn't exist, create a new Compromiso with this data.
     */
    create: XOR<CompromisoCreateInput, CompromisoUncheckedCreateInput>
    /**
     * In case the Compromiso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompromisoUpdateInput, CompromisoUncheckedUpdateInput>
  }

  /**
   * Compromiso delete
   */
  export type CompromisoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compromiso
     */
    select?: CompromisoSelect<ExtArgs> | null
    /**
     * Filter which Compromiso to delete.
     */
    where: CompromisoWhereUniqueInput
  }

  /**
   * Compromiso deleteMany
   */
  export type CompromisoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Compromisos to delete
     */
    where?: CompromisoWhereInput
  }

  /**
   * Compromiso without action
   */
  export type CompromisoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compromiso
     */
    select?: CompromisoSelect<ExtArgs> | null
  }


  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    id: number | null
    orden: number | null
  }

  export type VideoSumAggregateOutputType = {
    id: number | null
    orden: number | null
  }

  export type VideoMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    especialista: string | null
    youtubeUrl: string | null
    duracion: string | null
    orden: number | null
  }

  export type VideoMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    especialista: string | null
    youtubeUrl: string | null
    duracion: string | null
    orden: number | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    titulo: number
    especialista: number
    youtubeUrl: number
    duracion: number
    orden: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    id?: true
    orden?: true
  }

  export type VideoSumAggregateInputType = {
    id?: true
    orden?: true
  }

  export type VideoMinAggregateInputType = {
    id?: true
    titulo?: true
    especialista?: true
    youtubeUrl?: true
    duracion?: true
    orden?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    titulo?: true
    especialista?: true
    youtubeUrl?: true
    duracion?: true
    orden?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    titulo?: true
    especialista?: true
    youtubeUrl?: true
    duracion?: true
    orden?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: number
    titulo: string
    especialista: string
    youtubeUrl: string
    duracion: string
    orden: number
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    especialista?: boolean
    youtubeUrl?: boolean
    duracion?: boolean
    orden?: boolean
  }, ExtArgs["result"]["video"]>


  export type VideoSelectScalar = {
    id?: boolean
    titulo?: boolean
    especialista?: boolean
    youtubeUrl?: boolean
    duracion?: boolean
    orden?: boolean
  }


  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      especialista: string
      youtubeUrl: string
      duracion: string
      orden: number
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
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
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Video model
   */ 
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'Int'>
    readonly titulo: FieldRef<"Video", 'String'>
    readonly especialista: FieldRef<"Video", 'String'>
    readonly youtubeUrl: FieldRef<"Video", 'String'>
    readonly duracion: FieldRef<"Video", 'String'>
    readonly orden: FieldRef<"Video", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
  }


  /**
   * Model Noticia
   */

  export type AggregateNoticia = {
    _count: NoticiaCountAggregateOutputType | null
    _avg: NoticiaAvgAggregateOutputType | null
    _sum: NoticiaSumAggregateOutputType | null
    _min: NoticiaMinAggregateOutputType | null
    _max: NoticiaMaxAggregateOutputType | null
  }

  export type NoticiaAvgAggregateOutputType = {
    id: number | null
    orden: number | null
  }

  export type NoticiaSumAggregateOutputType = {
    id: number | null
    orden: number | null
  }

  export type NoticiaMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    fuente: string | null
    fecha: string | null
    descripcion: string | null
    tag: string | null
    url: string | null
    orden: number | null
  }

  export type NoticiaMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    fuente: string | null
    fecha: string | null
    descripcion: string | null
    tag: string | null
    url: string | null
    orden: number | null
  }

  export type NoticiaCountAggregateOutputType = {
    id: number
    titulo: number
    fuente: number
    fecha: number
    descripcion: number
    tag: number
    url: number
    orden: number
    _all: number
  }


  export type NoticiaAvgAggregateInputType = {
    id?: true
    orden?: true
  }

  export type NoticiaSumAggregateInputType = {
    id?: true
    orden?: true
  }

  export type NoticiaMinAggregateInputType = {
    id?: true
    titulo?: true
    fuente?: true
    fecha?: true
    descripcion?: true
    tag?: true
    url?: true
    orden?: true
  }

  export type NoticiaMaxAggregateInputType = {
    id?: true
    titulo?: true
    fuente?: true
    fecha?: true
    descripcion?: true
    tag?: true
    url?: true
    orden?: true
  }

  export type NoticiaCountAggregateInputType = {
    id?: true
    titulo?: true
    fuente?: true
    fecha?: true
    descripcion?: true
    tag?: true
    url?: true
    orden?: true
    _all?: true
  }

  export type NoticiaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Noticia to aggregate.
     */
    where?: NoticiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiaOrderByWithRelationInput | NoticiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoticiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Noticias
    **/
    _count?: true | NoticiaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoticiaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoticiaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoticiaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoticiaMaxAggregateInputType
  }

  export type GetNoticiaAggregateType<T extends NoticiaAggregateArgs> = {
        [P in keyof T & keyof AggregateNoticia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNoticia[P]>
      : GetScalarType<T[P], AggregateNoticia[P]>
  }




  export type NoticiaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticiaWhereInput
    orderBy?: NoticiaOrderByWithAggregationInput | NoticiaOrderByWithAggregationInput[]
    by: NoticiaScalarFieldEnum[] | NoticiaScalarFieldEnum
    having?: NoticiaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoticiaCountAggregateInputType | true
    _avg?: NoticiaAvgAggregateInputType
    _sum?: NoticiaSumAggregateInputType
    _min?: NoticiaMinAggregateInputType
    _max?: NoticiaMaxAggregateInputType
  }

  export type NoticiaGroupByOutputType = {
    id: number
    titulo: string
    fuente: string
    fecha: string
    descripcion: string
    tag: string
    url: string
    orden: number
    _count: NoticiaCountAggregateOutputType | null
    _avg: NoticiaAvgAggregateOutputType | null
    _sum: NoticiaSumAggregateOutputType | null
    _min: NoticiaMinAggregateOutputType | null
    _max: NoticiaMaxAggregateOutputType | null
  }

  type GetNoticiaGroupByPayload<T extends NoticiaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoticiaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoticiaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoticiaGroupByOutputType[P]>
            : GetScalarType<T[P], NoticiaGroupByOutputType[P]>
        }
      >
    >


  export type NoticiaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    fuente?: boolean
    fecha?: boolean
    descripcion?: boolean
    tag?: boolean
    url?: boolean
    orden?: boolean
  }, ExtArgs["result"]["noticia"]>


  export type NoticiaSelectScalar = {
    id?: boolean
    titulo?: boolean
    fuente?: boolean
    fecha?: boolean
    descripcion?: boolean
    tag?: boolean
    url?: boolean
    orden?: boolean
  }


  export type $NoticiaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Noticia"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      fuente: string
      fecha: string
      descripcion: string
      tag: string
      url: string
      orden: number
    }, ExtArgs["result"]["noticia"]>
    composites: {}
  }

  type NoticiaGetPayload<S extends boolean | null | undefined | NoticiaDefaultArgs> = $Result.GetResult<Prisma.$NoticiaPayload, S>

  type NoticiaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NoticiaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NoticiaCountAggregateInputType | true
    }

  export interface NoticiaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Noticia'], meta: { name: 'Noticia' } }
    /**
     * Find zero or one Noticia that matches the filter.
     * @param {NoticiaFindUniqueArgs} args - Arguments to find a Noticia
     * @example
     * // Get one Noticia
     * const noticia = await prisma.noticia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoticiaFindUniqueArgs>(args: SelectSubset<T, NoticiaFindUniqueArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Noticia that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NoticiaFindUniqueOrThrowArgs} args - Arguments to find a Noticia
     * @example
     * // Get one Noticia
     * const noticia = await prisma.noticia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoticiaFindUniqueOrThrowArgs>(args: SelectSubset<T, NoticiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Noticia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaFindFirstArgs} args - Arguments to find a Noticia
     * @example
     * // Get one Noticia
     * const noticia = await prisma.noticia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoticiaFindFirstArgs>(args?: SelectSubset<T, NoticiaFindFirstArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Noticia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaFindFirstOrThrowArgs} args - Arguments to find a Noticia
     * @example
     * // Get one Noticia
     * const noticia = await prisma.noticia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoticiaFindFirstOrThrowArgs>(args?: SelectSubset<T, NoticiaFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Noticias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Noticias
     * const noticias = await prisma.noticia.findMany()
     * 
     * // Get first 10 Noticias
     * const noticias = await prisma.noticia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noticiaWithIdOnly = await prisma.noticia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoticiaFindManyArgs>(args?: SelectSubset<T, NoticiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Noticia.
     * @param {NoticiaCreateArgs} args - Arguments to create a Noticia.
     * @example
     * // Create one Noticia
     * const Noticia = await prisma.noticia.create({
     *   data: {
     *     // ... data to create a Noticia
     *   }
     * })
     * 
     */
    create<T extends NoticiaCreateArgs>(args: SelectSubset<T, NoticiaCreateArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Noticias.
     * @param {NoticiaCreateManyArgs} args - Arguments to create many Noticias.
     * @example
     * // Create many Noticias
     * const noticia = await prisma.noticia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoticiaCreateManyArgs>(args?: SelectSubset<T, NoticiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Noticia.
     * @param {NoticiaDeleteArgs} args - Arguments to delete one Noticia.
     * @example
     * // Delete one Noticia
     * const Noticia = await prisma.noticia.delete({
     *   where: {
     *     // ... filter to delete one Noticia
     *   }
     * })
     * 
     */
    delete<T extends NoticiaDeleteArgs>(args: SelectSubset<T, NoticiaDeleteArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Noticia.
     * @param {NoticiaUpdateArgs} args - Arguments to update one Noticia.
     * @example
     * // Update one Noticia
     * const noticia = await prisma.noticia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoticiaUpdateArgs>(args: SelectSubset<T, NoticiaUpdateArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Noticias.
     * @param {NoticiaDeleteManyArgs} args - Arguments to filter Noticias to delete.
     * @example
     * // Delete a few Noticias
     * const { count } = await prisma.noticia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoticiaDeleteManyArgs>(args?: SelectSubset<T, NoticiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Noticias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Noticias
     * const noticia = await prisma.noticia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoticiaUpdateManyArgs>(args: SelectSubset<T, NoticiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Noticia.
     * @param {NoticiaUpsertArgs} args - Arguments to update or create a Noticia.
     * @example
     * // Update or create a Noticia
     * const noticia = await prisma.noticia.upsert({
     *   create: {
     *     // ... data to create a Noticia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Noticia we want to update
     *   }
     * })
     */
    upsert<T extends NoticiaUpsertArgs>(args: SelectSubset<T, NoticiaUpsertArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Noticias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaCountArgs} args - Arguments to filter Noticias to count.
     * @example
     * // Count the number of Noticias
     * const count = await prisma.noticia.count({
     *   where: {
     *     // ... the filter for the Noticias we want to count
     *   }
     * })
    **/
    count<T extends NoticiaCountArgs>(
      args?: Subset<T, NoticiaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoticiaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Noticia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoticiaAggregateArgs>(args: Subset<T, NoticiaAggregateArgs>): Prisma.PrismaPromise<GetNoticiaAggregateType<T>>

    /**
     * Group by Noticia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaGroupByArgs} args - Group by arguments.
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
      T extends NoticiaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoticiaGroupByArgs['orderBy'] }
        : { orderBy?: NoticiaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoticiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoticiaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Noticia model
   */
  readonly fields: NoticiaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Noticia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoticiaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Noticia model
   */ 
  interface NoticiaFieldRefs {
    readonly id: FieldRef<"Noticia", 'Int'>
    readonly titulo: FieldRef<"Noticia", 'String'>
    readonly fuente: FieldRef<"Noticia", 'String'>
    readonly fecha: FieldRef<"Noticia", 'String'>
    readonly descripcion: FieldRef<"Noticia", 'String'>
    readonly tag: FieldRef<"Noticia", 'String'>
    readonly url: FieldRef<"Noticia", 'String'>
    readonly orden: FieldRef<"Noticia", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Noticia findUnique
   */
  export type NoticiaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Filter, which Noticia to fetch.
     */
    where: NoticiaWhereUniqueInput
  }

  /**
   * Noticia findUniqueOrThrow
   */
  export type NoticiaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Filter, which Noticia to fetch.
     */
    where: NoticiaWhereUniqueInput
  }

  /**
   * Noticia findFirst
   */
  export type NoticiaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Filter, which Noticia to fetch.
     */
    where?: NoticiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiaOrderByWithRelationInput | NoticiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Noticias.
     */
    cursor?: NoticiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Noticias.
     */
    distinct?: NoticiaScalarFieldEnum | NoticiaScalarFieldEnum[]
  }

  /**
   * Noticia findFirstOrThrow
   */
  export type NoticiaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Filter, which Noticia to fetch.
     */
    where?: NoticiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiaOrderByWithRelationInput | NoticiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Noticias.
     */
    cursor?: NoticiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Noticias.
     */
    distinct?: NoticiaScalarFieldEnum | NoticiaScalarFieldEnum[]
  }

  /**
   * Noticia findMany
   */
  export type NoticiaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Filter, which Noticias to fetch.
     */
    where?: NoticiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiaOrderByWithRelationInput | NoticiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Noticias.
     */
    cursor?: NoticiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    distinct?: NoticiaScalarFieldEnum | NoticiaScalarFieldEnum[]
  }

  /**
   * Noticia create
   */
  export type NoticiaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * The data needed to create a Noticia.
     */
    data: XOR<NoticiaCreateInput, NoticiaUncheckedCreateInput>
  }

  /**
   * Noticia createMany
   */
  export type NoticiaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Noticias.
     */
    data: NoticiaCreateManyInput | NoticiaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Noticia update
   */
  export type NoticiaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * The data needed to update a Noticia.
     */
    data: XOR<NoticiaUpdateInput, NoticiaUncheckedUpdateInput>
    /**
     * Choose, which Noticia to update.
     */
    where: NoticiaWhereUniqueInput
  }

  /**
   * Noticia updateMany
   */
  export type NoticiaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Noticias.
     */
    data: XOR<NoticiaUpdateManyMutationInput, NoticiaUncheckedUpdateManyInput>
    /**
     * Filter which Noticias to update
     */
    where?: NoticiaWhereInput
  }

  /**
   * Noticia upsert
   */
  export type NoticiaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * The filter to search for the Noticia to update in case it exists.
     */
    where: NoticiaWhereUniqueInput
    /**
     * In case the Noticia found by the `where` argument doesn't exist, create a new Noticia with this data.
     */
    create: XOR<NoticiaCreateInput, NoticiaUncheckedCreateInput>
    /**
     * In case the Noticia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoticiaUpdateInput, NoticiaUncheckedUpdateInput>
  }

  /**
   * Noticia delete
   */
  export type NoticiaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Filter which Noticia to delete.
     */
    where: NoticiaWhereUniqueInput
  }

  /**
   * Noticia deleteMany
   */
  export type NoticiaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Noticias to delete
     */
    where?: NoticiaWhereInput
  }

  /**
   * Noticia without action
   */
  export type NoticiaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
  }


  /**
   * Model Material
   */

  export type AggregateMaterial = {
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  export type MaterialAvgAggregateOutputType = {
    id: number | null
    orden: number | null
  }

  export type MaterialSumAggregateOutputType = {
    id: number | null
    orden: number | null
  }

  export type MaterialMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descripcion: string | null
    icon: string | null
    bg: string | null
    url: string | null
    orden: number | null
  }

  export type MaterialMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descripcion: string | null
    icon: string | null
    bg: string | null
    url: string | null
    orden: number | null
  }

  export type MaterialCountAggregateOutputType = {
    id: number
    titulo: number
    descripcion: number
    icon: number
    bg: number
    url: number
    orden: number
    _all: number
  }


  export type MaterialAvgAggregateInputType = {
    id?: true
    orden?: true
  }

  export type MaterialSumAggregateInputType = {
    id?: true
    orden?: true
  }

  export type MaterialMinAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    icon?: true
    bg?: true
    url?: true
    orden?: true
  }

  export type MaterialMaxAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    icon?: true
    bg?: true
    url?: true
    orden?: true
  }

  export type MaterialCountAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    icon?: true
    bg?: true
    url?: true
    orden?: true
    _all?: true
  }

  export type MaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Material to aggregate.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materials
    **/
    _count?: true | MaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialMaxAggregateInputType
  }

  export type GetMaterialAggregateType<T extends MaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterial[P]>
      : GetScalarType<T[P], AggregateMaterial[P]>
  }




  export type MaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithAggregationInput | MaterialOrderByWithAggregationInput[]
    by: MaterialScalarFieldEnum[] | MaterialScalarFieldEnum
    having?: MaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialCountAggregateInputType | true
    _avg?: MaterialAvgAggregateInputType
    _sum?: MaterialSumAggregateInputType
    _min?: MaterialMinAggregateInputType
    _max?: MaterialMaxAggregateInputType
  }

  export type MaterialGroupByOutputType = {
    id: number
    titulo: string
    descripcion: string
    icon: string
    bg: string
    url: string
    orden: number
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  type GetMaterialGroupByPayload<T extends MaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialGroupByOutputType[P]>
        }
      >
    >


  export type MaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    icon?: boolean
    bg?: boolean
    url?: boolean
    orden?: boolean
  }, ExtArgs["result"]["material"]>


  export type MaterialSelectScalar = {
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    icon?: boolean
    bg?: boolean
    url?: boolean
    orden?: boolean
  }


  export type $MaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Material"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descripcion: string
      icon: string
      bg: string
      url: string
      orden: number
    }, ExtArgs["result"]["material"]>
    composites: {}
  }

  type MaterialGetPayload<S extends boolean | null | undefined | MaterialDefaultArgs> = $Result.GetResult<Prisma.$MaterialPayload, S>

  type MaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MaterialFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MaterialCountAggregateInputType | true
    }

  export interface MaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Material'], meta: { name: 'Material' } }
    /**
     * Find zero or one Material that matches the filter.
     * @param {MaterialFindUniqueArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialFindUniqueArgs>(args: SelectSubset<T, MaterialFindUniqueArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Material that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MaterialFindUniqueOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Material that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialFindFirstArgs>(args?: SelectSubset<T, MaterialFindFirstArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Material that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.material.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.material.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialWithIdOnly = await prisma.material.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialFindManyArgs>(args?: SelectSubset<T, MaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Material.
     * @param {MaterialCreateArgs} args - Arguments to create a Material.
     * @example
     * // Create one Material
     * const Material = await prisma.material.create({
     *   data: {
     *     // ... data to create a Material
     *   }
     * })
     * 
     */
    create<T extends MaterialCreateArgs>(args: SelectSubset<T, MaterialCreateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Materials.
     * @param {MaterialCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialCreateManyArgs>(args?: SelectSubset<T, MaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Material.
     * @param {MaterialDeleteArgs} args - Arguments to delete one Material.
     * @example
     * // Delete one Material
     * const Material = await prisma.material.delete({
     *   where: {
     *     // ... filter to delete one Material
     *   }
     * })
     * 
     */
    delete<T extends MaterialDeleteArgs>(args: SelectSubset<T, MaterialDeleteArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Material.
     * @param {MaterialUpdateArgs} args - Arguments to update one Material.
     * @example
     * // Update one Material
     * const material = await prisma.material.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialUpdateArgs>(args: SelectSubset<T, MaterialUpdateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Materials.
     * @param {MaterialDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.material.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialDeleteManyArgs>(args?: SelectSubset<T, MaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialUpdateManyArgs>(args: SelectSubset<T, MaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Material.
     * @param {MaterialUpsertArgs} args - Arguments to update or create a Material.
     * @example
     * // Update or create a Material
     * const material = await prisma.material.upsert({
     *   create: {
     *     // ... data to create a Material
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material we want to update
     *   }
     * })
     */
    upsert<T extends MaterialUpsertArgs>(args: SelectSubset<T, MaterialUpsertArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.material.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends MaterialCountArgs>(
      args?: Subset<T, MaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialAggregateArgs>(args: Subset<T, MaterialAggregateArgs>): Prisma.PrismaPromise<GetMaterialAggregateType<T>>

    /**
     * Group by Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialGroupByArgs} args - Group by arguments.
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
      T extends MaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialGroupByArgs['orderBy'] }
        : { orderBy?: MaterialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Material model
   */
  readonly fields: MaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Material.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Material model
   */ 
  interface MaterialFieldRefs {
    readonly id: FieldRef<"Material", 'Int'>
    readonly titulo: FieldRef<"Material", 'String'>
    readonly descripcion: FieldRef<"Material", 'String'>
    readonly icon: FieldRef<"Material", 'String'>
    readonly bg: FieldRef<"Material", 'String'>
    readonly url: FieldRef<"Material", 'String'>
    readonly orden: FieldRef<"Material", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Material findUnique
   */
  export type MaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findUniqueOrThrow
   */
  export type MaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findFirst
   */
  export type MaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findFirstOrThrow
   */
  export type MaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findMany
   */
  export type MaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material create
   */
  export type MaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * The data needed to create a Material.
     */
    data: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
  }

  /**
   * Material createMany
   */
  export type MaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Material update
   */
  export type MaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * The data needed to update a Material.
     */
    data: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
    /**
     * Choose, which Material to update.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material updateMany
   */
  export type MaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
  }

  /**
   * Material upsert
   */
  export type MaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * The filter to search for the Material to update in case it exists.
     */
    where: MaterialWhereUniqueInput
    /**
     * In case the Material found by the `where` argument doesn't exist, create a new Material with this data.
     */
    create: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
    /**
     * In case the Material was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
  }

  /**
   * Material delete
   */
  export type MaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Filter which Material to delete.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material deleteMany
   */
  export type MaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to delete
     */
    where?: MaterialWhereInput
  }

  /**
   * Material without action
   */
  export type MaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
  }


  /**
   * Model Config
   */

  export type AggregateConfig = {
    _count: ConfigCountAggregateOutputType | null
    _avg: ConfigAvgAggregateOutputType | null
    _sum: ConfigSumAggregateOutputType | null
    _min: ConfigMinAggregateOutputType | null
    _max: ConfigMaxAggregateOutputType | null
  }

  export type ConfigAvgAggregateOutputType = {
    id: number | null
  }

  export type ConfigSumAggregateOutputType = {
    id: number | null
  }

  export type ConfigMinAggregateOutputType = {
    id: number | null
    heroTitle: string | null
    heroSubtitle: string | null
    heroDescription: string | null
    heroBadge: string | null
    counterLabel: string | null
    counterSuffix: string | null
    ctaText: string | null
    ctaSubtext: string | null
  }

  export type ConfigMaxAggregateOutputType = {
    id: number | null
    heroTitle: string | null
    heroSubtitle: string | null
    heroDescription: string | null
    heroBadge: string | null
    counterLabel: string | null
    counterSuffix: string | null
    ctaText: string | null
    ctaSubtext: string | null
  }

  export type ConfigCountAggregateOutputType = {
    id: number
    heroTitle: number
    heroSubtitle: number
    heroDescription: number
    heroBadge: number
    counterLabel: number
    counterSuffix: number
    ctaText: number
    ctaSubtext: number
    _all: number
  }


  export type ConfigAvgAggregateInputType = {
    id?: true
  }

  export type ConfigSumAggregateInputType = {
    id?: true
  }

  export type ConfigMinAggregateInputType = {
    id?: true
    heroTitle?: true
    heroSubtitle?: true
    heroDescription?: true
    heroBadge?: true
    counterLabel?: true
    counterSuffix?: true
    ctaText?: true
    ctaSubtext?: true
  }

  export type ConfigMaxAggregateInputType = {
    id?: true
    heroTitle?: true
    heroSubtitle?: true
    heroDescription?: true
    heroBadge?: true
    counterLabel?: true
    counterSuffix?: true
    ctaText?: true
    ctaSubtext?: true
  }

  export type ConfigCountAggregateInputType = {
    id?: true
    heroTitle?: true
    heroSubtitle?: true
    heroDescription?: true
    heroBadge?: true
    counterLabel?: true
    counterSuffix?: true
    ctaText?: true
    ctaSubtext?: true
    _all?: true
  }

  export type ConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Config to aggregate.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Configs
    **/
    _count?: true | ConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfigMaxAggregateInputType
  }

  export type GetConfigAggregateType<T extends ConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfig[P]>
      : GetScalarType<T[P], AggregateConfig[P]>
  }




  export type ConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfigWhereInput
    orderBy?: ConfigOrderByWithAggregationInput | ConfigOrderByWithAggregationInput[]
    by: ConfigScalarFieldEnum[] | ConfigScalarFieldEnum
    having?: ConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfigCountAggregateInputType | true
    _avg?: ConfigAvgAggregateInputType
    _sum?: ConfigSumAggregateInputType
    _min?: ConfigMinAggregateInputType
    _max?: ConfigMaxAggregateInputType
  }

  export type ConfigGroupByOutputType = {
    id: number
    heroTitle: string
    heroSubtitle: string
    heroDescription: string
    heroBadge: string
    counterLabel: string
    counterSuffix: string
    ctaText: string
    ctaSubtext: string
    _count: ConfigCountAggregateOutputType | null
    _avg: ConfigAvgAggregateOutputType | null
    _sum: ConfigSumAggregateOutputType | null
    _min: ConfigMinAggregateOutputType | null
    _max: ConfigMaxAggregateOutputType | null
  }

  type GetConfigGroupByPayload<T extends ConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfigGroupByOutputType[P]>
            : GetScalarType<T[P], ConfigGroupByOutputType[P]>
        }
      >
    >


  export type ConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heroTitle?: boolean
    heroSubtitle?: boolean
    heroDescription?: boolean
    heroBadge?: boolean
    counterLabel?: boolean
    counterSuffix?: boolean
    ctaText?: boolean
    ctaSubtext?: boolean
  }, ExtArgs["result"]["config"]>


  export type ConfigSelectScalar = {
    id?: boolean
    heroTitle?: boolean
    heroSubtitle?: boolean
    heroDescription?: boolean
    heroBadge?: boolean
    counterLabel?: boolean
    counterSuffix?: boolean
    ctaText?: boolean
    ctaSubtext?: boolean
  }


  export type $ConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Config"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      heroTitle: string
      heroSubtitle: string
      heroDescription: string
      heroBadge: string
      counterLabel: string
      counterSuffix: string
      ctaText: string
      ctaSubtext: string
    }, ExtArgs["result"]["config"]>
    composites: {}
  }

  type ConfigGetPayload<S extends boolean | null | undefined | ConfigDefaultArgs> = $Result.GetResult<Prisma.$ConfigPayload, S>

  type ConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConfigFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConfigCountAggregateInputType | true
    }

  export interface ConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Config'], meta: { name: 'Config' } }
    /**
     * Find zero or one Config that matches the filter.
     * @param {ConfigFindUniqueArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfigFindUniqueArgs>(args: SelectSubset<T, ConfigFindUniqueArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Config that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ConfigFindUniqueOrThrowArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Config that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigFindFirstArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfigFindFirstArgs>(args?: SelectSubset<T, ConfigFindFirstArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Config that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigFindFirstOrThrowArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Configs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configs
     * const configs = await prisma.config.findMany()
     * 
     * // Get first 10 Configs
     * const configs = await prisma.config.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configWithIdOnly = await prisma.config.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConfigFindManyArgs>(args?: SelectSubset<T, ConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Config.
     * @param {ConfigCreateArgs} args - Arguments to create a Config.
     * @example
     * // Create one Config
     * const Config = await prisma.config.create({
     *   data: {
     *     // ... data to create a Config
     *   }
     * })
     * 
     */
    create<T extends ConfigCreateArgs>(args: SelectSubset<T, ConfigCreateArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Configs.
     * @param {ConfigCreateManyArgs} args - Arguments to create many Configs.
     * @example
     * // Create many Configs
     * const config = await prisma.config.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfigCreateManyArgs>(args?: SelectSubset<T, ConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Config.
     * @param {ConfigDeleteArgs} args - Arguments to delete one Config.
     * @example
     * // Delete one Config
     * const Config = await prisma.config.delete({
     *   where: {
     *     // ... filter to delete one Config
     *   }
     * })
     * 
     */
    delete<T extends ConfigDeleteArgs>(args: SelectSubset<T, ConfigDeleteArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Config.
     * @param {ConfigUpdateArgs} args - Arguments to update one Config.
     * @example
     * // Update one Config
     * const config = await prisma.config.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfigUpdateArgs>(args: SelectSubset<T, ConfigUpdateArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Configs.
     * @param {ConfigDeleteManyArgs} args - Arguments to filter Configs to delete.
     * @example
     * // Delete a few Configs
     * const { count } = await prisma.config.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfigDeleteManyArgs>(args?: SelectSubset<T, ConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configs
     * const config = await prisma.config.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfigUpdateManyArgs>(args: SelectSubset<T, ConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Config.
     * @param {ConfigUpsertArgs} args - Arguments to update or create a Config.
     * @example
     * // Update or create a Config
     * const config = await prisma.config.upsert({
     *   create: {
     *     // ... data to create a Config
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Config we want to update
     *   }
     * })
     */
    upsert<T extends ConfigUpsertArgs>(args: SelectSubset<T, ConfigUpsertArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigCountArgs} args - Arguments to filter Configs to count.
     * @example
     * // Count the number of Configs
     * const count = await prisma.config.count({
     *   where: {
     *     // ... the filter for the Configs we want to count
     *   }
     * })
    **/
    count<T extends ConfigCountArgs>(
      args?: Subset<T, ConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfigAggregateArgs>(args: Subset<T, ConfigAggregateArgs>): Prisma.PrismaPromise<GetConfigAggregateType<T>>

    /**
     * Group by Config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigGroupByArgs} args - Group by arguments.
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
      T extends ConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfigGroupByArgs['orderBy'] }
        : { orderBy?: ConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Config model
   */
  readonly fields: ConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Config.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Config model
   */ 
  interface ConfigFieldRefs {
    readonly id: FieldRef<"Config", 'Int'>
    readonly heroTitle: FieldRef<"Config", 'String'>
    readonly heroSubtitle: FieldRef<"Config", 'String'>
    readonly heroDescription: FieldRef<"Config", 'String'>
    readonly heroBadge: FieldRef<"Config", 'String'>
    readonly counterLabel: FieldRef<"Config", 'String'>
    readonly counterSuffix: FieldRef<"Config", 'String'>
    readonly ctaText: FieldRef<"Config", 'String'>
    readonly ctaSubtext: FieldRef<"Config", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Config findUnique
   */
  export type ConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config findUniqueOrThrow
   */
  export type ConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config findFirst
   */
  export type ConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configs.
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configs.
     */
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * Config findFirstOrThrow
   */
  export type ConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configs.
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configs.
     */
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * Config findMany
   */
  export type ConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Filter, which Configs to fetch.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Configs.
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * Config create
   */
  export type ConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * The data needed to create a Config.
     */
    data: XOR<ConfigCreateInput, ConfigUncheckedCreateInput>
  }

  /**
   * Config createMany
   */
  export type ConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Configs.
     */
    data: ConfigCreateManyInput | ConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Config update
   */
  export type ConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * The data needed to update a Config.
     */
    data: XOR<ConfigUpdateInput, ConfigUncheckedUpdateInput>
    /**
     * Choose, which Config to update.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config updateMany
   */
  export type ConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Configs.
     */
    data: XOR<ConfigUpdateManyMutationInput, ConfigUncheckedUpdateManyInput>
    /**
     * Filter which Configs to update
     */
    where?: ConfigWhereInput
  }

  /**
   * Config upsert
   */
  export type ConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * The filter to search for the Config to update in case it exists.
     */
    where: ConfigWhereUniqueInput
    /**
     * In case the Config found by the `where` argument doesn't exist, create a new Config with this data.
     */
    create: XOR<ConfigCreateInput, ConfigUncheckedCreateInput>
    /**
     * In case the Config was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfigUpdateInput, ConfigUncheckedUpdateInput>
  }

  /**
   * Config delete
   */
  export type ConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Filter which Config to delete.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config deleteMany
   */
  export type ConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configs to delete
     */
    where?: ConfigWhereInput
  }

  /**
   * Config without action
   */
  export type ConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompromisoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    apellido: 'apellido',
    telefono: 'telefono',
    mail: 'mail',
    colegio: 'colegio',
    createdAt: 'createdAt'
  };

  export type CompromisoScalarFieldEnum = (typeof CompromisoScalarFieldEnum)[keyof typeof CompromisoScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    especialista: 'especialista',
    youtubeUrl: 'youtubeUrl',
    duracion: 'duracion',
    orden: 'orden'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const NoticiaScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    fuente: 'fuente',
    fecha: 'fecha',
    descripcion: 'descripcion',
    tag: 'tag',
    url: 'url',
    orden: 'orden'
  };

  export type NoticiaScalarFieldEnum = (typeof NoticiaScalarFieldEnum)[keyof typeof NoticiaScalarFieldEnum]


  export const MaterialScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descripcion: 'descripcion',
    icon: 'icon',
    bg: 'bg',
    url: 'url',
    orden: 'orden'
  };

  export type MaterialScalarFieldEnum = (typeof MaterialScalarFieldEnum)[keyof typeof MaterialScalarFieldEnum]


  export const ConfigScalarFieldEnum: {
    id: 'id',
    heroTitle: 'heroTitle',
    heroSubtitle: 'heroSubtitle',
    heroDescription: 'heroDescription',
    heroBadge: 'heroBadge',
    counterLabel: 'counterLabel',
    counterSuffix: 'counterSuffix',
    ctaText: 'ctaText',
    ctaSubtext: 'ctaSubtext'
  };

  export type ConfigScalarFieldEnum = (typeof ConfigScalarFieldEnum)[keyof typeof ConfigScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CompromisoWhereInput = {
    AND?: CompromisoWhereInput | CompromisoWhereInput[]
    OR?: CompromisoWhereInput[]
    NOT?: CompromisoWhereInput | CompromisoWhereInput[]
    id?: IntFilter<"Compromiso"> | number
    nombre?: StringFilter<"Compromiso"> | string
    apellido?: StringFilter<"Compromiso"> | string
    telefono?: StringNullableFilter<"Compromiso"> | string | null
    mail?: StringFilter<"Compromiso"> | string
    colegio?: StringNullableFilter<"Compromiso"> | string | null
    createdAt?: DateTimeFilter<"Compromiso"> | Date | string
  }

  export type CompromisoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    telefono?: SortOrderInput | SortOrder
    mail?: SortOrder
    colegio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type CompromisoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompromisoWhereInput | CompromisoWhereInput[]
    OR?: CompromisoWhereInput[]
    NOT?: CompromisoWhereInput | CompromisoWhereInput[]
    nombre?: StringFilter<"Compromiso"> | string
    apellido?: StringFilter<"Compromiso"> | string
    telefono?: StringNullableFilter<"Compromiso"> | string | null
    mail?: StringFilter<"Compromiso"> | string
    colegio?: StringNullableFilter<"Compromiso"> | string | null
    createdAt?: DateTimeFilter<"Compromiso"> | Date | string
  }, "id">

  export type CompromisoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    telefono?: SortOrderInput | SortOrder
    mail?: SortOrder
    colegio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CompromisoCountOrderByAggregateInput
    _avg?: CompromisoAvgOrderByAggregateInput
    _max?: CompromisoMaxOrderByAggregateInput
    _min?: CompromisoMinOrderByAggregateInput
    _sum?: CompromisoSumOrderByAggregateInput
  }

  export type CompromisoScalarWhereWithAggregatesInput = {
    AND?: CompromisoScalarWhereWithAggregatesInput | CompromisoScalarWhereWithAggregatesInput[]
    OR?: CompromisoScalarWhereWithAggregatesInput[]
    NOT?: CompromisoScalarWhereWithAggregatesInput | CompromisoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Compromiso"> | number
    nombre?: StringWithAggregatesFilter<"Compromiso"> | string
    apellido?: StringWithAggregatesFilter<"Compromiso"> | string
    telefono?: StringNullableWithAggregatesFilter<"Compromiso"> | string | null
    mail?: StringWithAggregatesFilter<"Compromiso"> | string
    colegio?: StringNullableWithAggregatesFilter<"Compromiso"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Compromiso"> | Date | string
  }

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: IntFilter<"Video"> | number
    titulo?: StringFilter<"Video"> | string
    especialista?: StringFilter<"Video"> | string
    youtubeUrl?: StringFilter<"Video"> | string
    duracion?: StringFilter<"Video"> | string
    orden?: IntFilter<"Video"> | number
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    especialista?: SortOrder
    youtubeUrl?: SortOrder
    duracion?: SortOrder
    orden?: SortOrder
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    titulo?: StringFilter<"Video"> | string
    especialista?: StringFilter<"Video"> | string
    youtubeUrl?: StringFilter<"Video"> | string
    duracion?: StringFilter<"Video"> | string
    orden?: IntFilter<"Video"> | number
  }, "id">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    especialista?: SortOrder
    youtubeUrl?: SortOrder
    duracion?: SortOrder
    orden?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _avg?: VideoAvgOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
    _sum?: VideoSumOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Video"> | number
    titulo?: StringWithAggregatesFilter<"Video"> | string
    especialista?: StringWithAggregatesFilter<"Video"> | string
    youtubeUrl?: StringWithAggregatesFilter<"Video"> | string
    duracion?: StringWithAggregatesFilter<"Video"> | string
    orden?: IntWithAggregatesFilter<"Video"> | number
  }

  export type NoticiaWhereInput = {
    AND?: NoticiaWhereInput | NoticiaWhereInput[]
    OR?: NoticiaWhereInput[]
    NOT?: NoticiaWhereInput | NoticiaWhereInput[]
    id?: IntFilter<"Noticia"> | number
    titulo?: StringFilter<"Noticia"> | string
    fuente?: StringFilter<"Noticia"> | string
    fecha?: StringFilter<"Noticia"> | string
    descripcion?: StringFilter<"Noticia"> | string
    tag?: StringFilter<"Noticia"> | string
    url?: StringFilter<"Noticia"> | string
    orden?: IntFilter<"Noticia"> | number
  }

  export type NoticiaOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    fuente?: SortOrder
    fecha?: SortOrder
    descripcion?: SortOrder
    tag?: SortOrder
    url?: SortOrder
    orden?: SortOrder
  }

  export type NoticiaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NoticiaWhereInput | NoticiaWhereInput[]
    OR?: NoticiaWhereInput[]
    NOT?: NoticiaWhereInput | NoticiaWhereInput[]
    titulo?: StringFilter<"Noticia"> | string
    fuente?: StringFilter<"Noticia"> | string
    fecha?: StringFilter<"Noticia"> | string
    descripcion?: StringFilter<"Noticia"> | string
    tag?: StringFilter<"Noticia"> | string
    url?: StringFilter<"Noticia"> | string
    orden?: IntFilter<"Noticia"> | number
  }, "id">

  export type NoticiaOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    fuente?: SortOrder
    fecha?: SortOrder
    descripcion?: SortOrder
    tag?: SortOrder
    url?: SortOrder
    orden?: SortOrder
    _count?: NoticiaCountOrderByAggregateInput
    _avg?: NoticiaAvgOrderByAggregateInput
    _max?: NoticiaMaxOrderByAggregateInput
    _min?: NoticiaMinOrderByAggregateInput
    _sum?: NoticiaSumOrderByAggregateInput
  }

  export type NoticiaScalarWhereWithAggregatesInput = {
    AND?: NoticiaScalarWhereWithAggregatesInput | NoticiaScalarWhereWithAggregatesInput[]
    OR?: NoticiaScalarWhereWithAggregatesInput[]
    NOT?: NoticiaScalarWhereWithAggregatesInput | NoticiaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Noticia"> | number
    titulo?: StringWithAggregatesFilter<"Noticia"> | string
    fuente?: StringWithAggregatesFilter<"Noticia"> | string
    fecha?: StringWithAggregatesFilter<"Noticia"> | string
    descripcion?: StringWithAggregatesFilter<"Noticia"> | string
    tag?: StringWithAggregatesFilter<"Noticia"> | string
    url?: StringWithAggregatesFilter<"Noticia"> | string
    orden?: IntWithAggregatesFilter<"Noticia"> | number
  }

  export type MaterialWhereInput = {
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    id?: IntFilter<"Material"> | number
    titulo?: StringFilter<"Material"> | string
    descripcion?: StringFilter<"Material"> | string
    icon?: StringFilter<"Material"> | string
    bg?: StringFilter<"Material"> | string
    url?: StringFilter<"Material"> | string
    orden?: IntFilter<"Material"> | number
  }

  export type MaterialOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    icon?: SortOrder
    bg?: SortOrder
    url?: SortOrder
    orden?: SortOrder
  }

  export type MaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    titulo?: StringFilter<"Material"> | string
    descripcion?: StringFilter<"Material"> | string
    icon?: StringFilter<"Material"> | string
    bg?: StringFilter<"Material"> | string
    url?: StringFilter<"Material"> | string
    orden?: IntFilter<"Material"> | number
  }, "id">

  export type MaterialOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    icon?: SortOrder
    bg?: SortOrder
    url?: SortOrder
    orden?: SortOrder
    _count?: MaterialCountOrderByAggregateInput
    _avg?: MaterialAvgOrderByAggregateInput
    _max?: MaterialMaxOrderByAggregateInput
    _min?: MaterialMinOrderByAggregateInput
    _sum?: MaterialSumOrderByAggregateInput
  }

  export type MaterialScalarWhereWithAggregatesInput = {
    AND?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    OR?: MaterialScalarWhereWithAggregatesInput[]
    NOT?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Material"> | number
    titulo?: StringWithAggregatesFilter<"Material"> | string
    descripcion?: StringWithAggregatesFilter<"Material"> | string
    icon?: StringWithAggregatesFilter<"Material"> | string
    bg?: StringWithAggregatesFilter<"Material"> | string
    url?: StringWithAggregatesFilter<"Material"> | string
    orden?: IntWithAggregatesFilter<"Material"> | number
  }

  export type ConfigWhereInput = {
    AND?: ConfigWhereInput | ConfigWhereInput[]
    OR?: ConfigWhereInput[]
    NOT?: ConfigWhereInput | ConfigWhereInput[]
    id?: IntFilter<"Config"> | number
    heroTitle?: StringFilter<"Config"> | string
    heroSubtitle?: StringFilter<"Config"> | string
    heroDescription?: StringFilter<"Config"> | string
    heroBadge?: StringFilter<"Config"> | string
    counterLabel?: StringFilter<"Config"> | string
    counterSuffix?: StringFilter<"Config"> | string
    ctaText?: StringFilter<"Config"> | string
    ctaSubtext?: StringFilter<"Config"> | string
  }

  export type ConfigOrderByWithRelationInput = {
    id?: SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    heroDescription?: SortOrder
    heroBadge?: SortOrder
    counterLabel?: SortOrder
    counterSuffix?: SortOrder
    ctaText?: SortOrder
    ctaSubtext?: SortOrder
  }

  export type ConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConfigWhereInput | ConfigWhereInput[]
    OR?: ConfigWhereInput[]
    NOT?: ConfigWhereInput | ConfigWhereInput[]
    heroTitle?: StringFilter<"Config"> | string
    heroSubtitle?: StringFilter<"Config"> | string
    heroDescription?: StringFilter<"Config"> | string
    heroBadge?: StringFilter<"Config"> | string
    counterLabel?: StringFilter<"Config"> | string
    counterSuffix?: StringFilter<"Config"> | string
    ctaText?: StringFilter<"Config"> | string
    ctaSubtext?: StringFilter<"Config"> | string
  }, "id">

  export type ConfigOrderByWithAggregationInput = {
    id?: SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    heroDescription?: SortOrder
    heroBadge?: SortOrder
    counterLabel?: SortOrder
    counterSuffix?: SortOrder
    ctaText?: SortOrder
    ctaSubtext?: SortOrder
    _count?: ConfigCountOrderByAggregateInput
    _avg?: ConfigAvgOrderByAggregateInput
    _max?: ConfigMaxOrderByAggregateInput
    _min?: ConfigMinOrderByAggregateInput
    _sum?: ConfigSumOrderByAggregateInput
  }

  export type ConfigScalarWhereWithAggregatesInput = {
    AND?: ConfigScalarWhereWithAggregatesInput | ConfigScalarWhereWithAggregatesInput[]
    OR?: ConfigScalarWhereWithAggregatesInput[]
    NOT?: ConfigScalarWhereWithAggregatesInput | ConfigScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Config"> | number
    heroTitle?: StringWithAggregatesFilter<"Config"> | string
    heroSubtitle?: StringWithAggregatesFilter<"Config"> | string
    heroDescription?: StringWithAggregatesFilter<"Config"> | string
    heroBadge?: StringWithAggregatesFilter<"Config"> | string
    counterLabel?: StringWithAggregatesFilter<"Config"> | string
    counterSuffix?: StringWithAggregatesFilter<"Config"> | string
    ctaText?: StringWithAggregatesFilter<"Config"> | string
    ctaSubtext?: StringWithAggregatesFilter<"Config"> | string
  }

  export type CompromisoCreateInput = {
    nombre: string
    apellido: string
    telefono?: string | null
    mail: string
    colegio?: string | null
    createdAt?: Date | string
  }

  export type CompromisoUncheckedCreateInput = {
    id?: number
    nombre: string
    apellido: string
    telefono?: string | null
    mail: string
    colegio?: string | null
    createdAt?: Date | string
  }

  export type CompromisoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: StringFieldUpdateOperationsInput | string
    colegio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompromisoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: StringFieldUpdateOperationsInput | string
    colegio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompromisoCreateManyInput = {
    id?: number
    nombre: string
    apellido: string
    telefono?: string | null
    mail: string
    colegio?: string | null
    createdAt?: Date | string
  }

  export type CompromisoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: StringFieldUpdateOperationsInput | string
    colegio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompromisoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: StringFieldUpdateOperationsInput | string
    colegio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateInput = {
    titulo: string
    especialista: string
    youtubeUrl: string
    duracion: string
    orden?: number
  }

  export type VideoUncheckedCreateInput = {
    id?: number
    titulo: string
    especialista: string
    youtubeUrl: string
    duracion: string
    orden?: number
  }

  export type VideoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    especialista?: StringFieldUpdateOperationsInput | string
    youtubeUrl?: StringFieldUpdateOperationsInput | string
    duracion?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type VideoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    especialista?: StringFieldUpdateOperationsInput | string
    youtubeUrl?: StringFieldUpdateOperationsInput | string
    duracion?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type VideoCreateManyInput = {
    id?: number
    titulo: string
    especialista: string
    youtubeUrl: string
    duracion: string
    orden?: number
  }

  export type VideoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    especialista?: StringFieldUpdateOperationsInput | string
    youtubeUrl?: StringFieldUpdateOperationsInput | string
    duracion?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    especialista?: StringFieldUpdateOperationsInput | string
    youtubeUrl?: StringFieldUpdateOperationsInput | string
    duracion?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type NoticiaCreateInput = {
    titulo: string
    fuente: string
    fecha: string
    descripcion: string
    tag: string
    url?: string
    orden?: number
  }

  export type NoticiaUncheckedCreateInput = {
    id?: number
    titulo: string
    fuente: string
    fecha: string
    descripcion: string
    tag: string
    url?: string
    orden?: number
  }

  export type NoticiaUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    fuente?: StringFieldUpdateOperationsInput | string
    fecha?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type NoticiaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    fuente?: StringFieldUpdateOperationsInput | string
    fecha?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type NoticiaCreateManyInput = {
    id?: number
    titulo: string
    fuente: string
    fecha: string
    descripcion: string
    tag: string
    url?: string
    orden?: number
  }

  export type NoticiaUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    fuente?: StringFieldUpdateOperationsInput | string
    fecha?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type NoticiaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    fuente?: StringFieldUpdateOperationsInput | string
    fecha?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type MaterialCreateInput = {
    titulo: string
    descripcion: string
    icon: string
    bg: string
    url?: string
    orden?: number
  }

  export type MaterialUncheckedCreateInput = {
    id?: number
    titulo: string
    descripcion: string
    icon: string
    bg: string
    url?: string
    orden?: number
  }

  export type MaterialUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    bg?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type MaterialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    bg?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type MaterialCreateManyInput = {
    id?: number
    titulo: string
    descripcion: string
    icon: string
    bg: string
    url?: string
    orden?: number
  }

  export type MaterialUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    bg?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type MaterialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    bg?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type ConfigCreateInput = {
    id?: number
    heroTitle: string
    heroSubtitle: string
    heroDescription: string
    heroBadge: string
    counterLabel: string
    counterSuffix: string
    ctaText: string
    ctaSubtext: string
  }

  export type ConfigUncheckedCreateInput = {
    id?: number
    heroTitle: string
    heroSubtitle: string
    heroDescription: string
    heroBadge: string
    counterLabel: string
    counterSuffix: string
    ctaText: string
    ctaSubtext: string
  }

  export type ConfigUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    heroTitle?: StringFieldUpdateOperationsInput | string
    heroSubtitle?: StringFieldUpdateOperationsInput | string
    heroDescription?: StringFieldUpdateOperationsInput | string
    heroBadge?: StringFieldUpdateOperationsInput | string
    counterLabel?: StringFieldUpdateOperationsInput | string
    counterSuffix?: StringFieldUpdateOperationsInput | string
    ctaText?: StringFieldUpdateOperationsInput | string
    ctaSubtext?: StringFieldUpdateOperationsInput | string
  }

  export type ConfigUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    heroTitle?: StringFieldUpdateOperationsInput | string
    heroSubtitle?: StringFieldUpdateOperationsInput | string
    heroDescription?: StringFieldUpdateOperationsInput | string
    heroBadge?: StringFieldUpdateOperationsInput | string
    counterLabel?: StringFieldUpdateOperationsInput | string
    counterSuffix?: StringFieldUpdateOperationsInput | string
    ctaText?: StringFieldUpdateOperationsInput | string
    ctaSubtext?: StringFieldUpdateOperationsInput | string
  }

  export type ConfigCreateManyInput = {
    id?: number
    heroTitle: string
    heroSubtitle: string
    heroDescription: string
    heroBadge: string
    counterLabel: string
    counterSuffix: string
    ctaText: string
    ctaSubtext: string
  }

  export type ConfigUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    heroTitle?: StringFieldUpdateOperationsInput | string
    heroSubtitle?: StringFieldUpdateOperationsInput | string
    heroDescription?: StringFieldUpdateOperationsInput | string
    heroBadge?: StringFieldUpdateOperationsInput | string
    counterLabel?: StringFieldUpdateOperationsInput | string
    counterSuffix?: StringFieldUpdateOperationsInput | string
    ctaText?: StringFieldUpdateOperationsInput | string
    ctaSubtext?: StringFieldUpdateOperationsInput | string
  }

  export type ConfigUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    heroTitle?: StringFieldUpdateOperationsInput | string
    heroSubtitle?: StringFieldUpdateOperationsInput | string
    heroDescription?: StringFieldUpdateOperationsInput | string
    heroBadge?: StringFieldUpdateOperationsInput | string
    counterLabel?: StringFieldUpdateOperationsInput | string
    counterSuffix?: StringFieldUpdateOperationsInput | string
    ctaText?: StringFieldUpdateOperationsInput | string
    ctaSubtext?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CompromisoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    telefono?: SortOrder
    mail?: SortOrder
    colegio?: SortOrder
    createdAt?: SortOrder
  }

  export type CompromisoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompromisoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    telefono?: SortOrder
    mail?: SortOrder
    colegio?: SortOrder
    createdAt?: SortOrder
  }

  export type CompromisoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    telefono?: SortOrder
    mail?: SortOrder
    colegio?: SortOrder
    createdAt?: SortOrder
  }

  export type CompromisoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    especialista?: SortOrder
    youtubeUrl?: SortOrder
    duracion?: SortOrder
    orden?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    id?: SortOrder
    orden?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    especialista?: SortOrder
    youtubeUrl?: SortOrder
    duracion?: SortOrder
    orden?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    especialista?: SortOrder
    youtubeUrl?: SortOrder
    duracion?: SortOrder
    orden?: SortOrder
  }

  export type VideoSumOrderByAggregateInput = {
    id?: SortOrder
    orden?: SortOrder
  }

  export type NoticiaCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    fuente?: SortOrder
    fecha?: SortOrder
    descripcion?: SortOrder
    tag?: SortOrder
    url?: SortOrder
    orden?: SortOrder
  }

  export type NoticiaAvgOrderByAggregateInput = {
    id?: SortOrder
    orden?: SortOrder
  }

  export type NoticiaMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    fuente?: SortOrder
    fecha?: SortOrder
    descripcion?: SortOrder
    tag?: SortOrder
    url?: SortOrder
    orden?: SortOrder
  }

  export type NoticiaMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    fuente?: SortOrder
    fecha?: SortOrder
    descripcion?: SortOrder
    tag?: SortOrder
    url?: SortOrder
    orden?: SortOrder
  }

  export type NoticiaSumOrderByAggregateInput = {
    id?: SortOrder
    orden?: SortOrder
  }

  export type MaterialCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    icon?: SortOrder
    bg?: SortOrder
    url?: SortOrder
    orden?: SortOrder
  }

  export type MaterialAvgOrderByAggregateInput = {
    id?: SortOrder
    orden?: SortOrder
  }

  export type MaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    icon?: SortOrder
    bg?: SortOrder
    url?: SortOrder
    orden?: SortOrder
  }

  export type MaterialMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    icon?: SortOrder
    bg?: SortOrder
    url?: SortOrder
    orden?: SortOrder
  }

  export type MaterialSumOrderByAggregateInput = {
    id?: SortOrder
    orden?: SortOrder
  }

  export type ConfigCountOrderByAggregateInput = {
    id?: SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    heroDescription?: SortOrder
    heroBadge?: SortOrder
    counterLabel?: SortOrder
    counterSuffix?: SortOrder
    ctaText?: SortOrder
    ctaSubtext?: SortOrder
  }

  export type ConfigAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    heroDescription?: SortOrder
    heroBadge?: SortOrder
    counterLabel?: SortOrder
    counterSuffix?: SortOrder
    ctaText?: SortOrder
    ctaSubtext?: SortOrder
  }

  export type ConfigMinOrderByAggregateInput = {
    id?: SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    heroDescription?: SortOrder
    heroBadge?: SortOrder
    counterLabel?: SortOrder
    counterSuffix?: SortOrder
    ctaText?: SortOrder
    ctaSubtext?: SortOrder
  }

  export type ConfigSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CompromisoDefaultArgs instead
     */
    export type CompromisoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompromisoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VideoDefaultArgs instead
     */
    export type VideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VideoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NoticiaDefaultArgs instead
     */
    export type NoticiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NoticiaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MaterialDefaultArgs instead
     */
    export type MaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MaterialDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConfigDefaultArgs instead
     */
    export type ConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConfigDefaultArgs<ExtArgs>

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