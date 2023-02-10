import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Model, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly version?: number | null;
  readonly url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Model, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly version?: number | null;
  readonly url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Model = LazyLoading extends LazyLoadingDisabled ? EagerModel : LazyModel

export declare const Model: (new (init: ModelInit<Model>) => Model) & {
  copyOf(source: Model, mutator: (draft: MutableModel<Model>) => MutableModel<Model> | void): Model;
}