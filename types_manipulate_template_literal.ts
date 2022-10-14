export {};

type ReadOrWrite = 'read' | 'write';
type Bulk = 'bulk' | '';

type Access = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}`;

type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R : never;
type ROWBulk = ReadOrWriteBulk<Access>;

//-----------------------
type ErrorOrSuccess = 'error' | 'success';

type ResponseType = {
    result: `http${Capitalize<ErrorOrSuccess>}`;
};

const res: ResponseType = {
    result: 'httpError',
};
