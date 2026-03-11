import { BaseClient, type Parsed, type RequestParams } from "./base-client";
import { CommandFinishedData, SandboxResponse, CommandResponse, CommandFinishedResponse, LogLineStdout, LogLineStderr, ExtendTimeoutResponse, UpdateNetworkPolicyResponse, SnapshotResponse, CreateSnapshotResponse, type CommandData } from "./validators";
import { FileWriter } from "./file-writer";
import { z } from "zod";
import { Readable } from "stream";
import { NetworkPolicy } from "../network-policy";
import { WithPrivate } from "../utils/types";
import { RUNTIMES } from "../constants";
export interface WithFetchOptions {
    fetch?: typeof globalThis.fetch;
}
export declare class APIClient extends BaseClient {
    private teamId;
    private projectId;
    private isJwtToken;
    constructor(params: {
        baseUrl?: string;
        teamId: string;
        token: string;
        fetch?: typeof globalThis.fetch;
    });
    private ensureValidToken;
    protected request(path: string, params?: RequestParams): Promise<Response>;
    getSandbox(params: WithPrivate<{
        sandboxId: string;
        signal?: AbortSignal;
    }>): Promise<Parsed<{
        sandbox: {
            id: string;
            memory: number;
            vcpus: number;
            region: string;
            runtime: string;
            timeout: number;
            status: "aborted" | "pending" | "running" | "stopping" | "stopped" | "failed" | "snapshotting";
            requestedAt: number;
            createdAt: number;
            cwd: string;
            updatedAt: number;
            startedAt?: number | undefined;
            requestedStopAt?: number | undefined;
            stoppedAt?: number | undefined;
            abortedAt?: number | undefined;
            duration?: number | undefined;
            sourceSnapshotId?: string | undefined;
            snapshottedAt?: number | undefined;
            interactivePort?: number | undefined;
            networkPolicy?: {
                [x: string]: unknown;
                mode: "allow-all";
            } | {
                [x: string]: unknown;
                mode: "deny-all";
            } | {
                [x: string]: unknown;
                mode: "custom";
                allowedDomains?: string[] | undefined;
                allowedCIDRs?: string[] | undefined;
                deniedCIDRs?: string[] | undefined;
                injectionRules?: {
                    domain: string;
                    headers?: Record<string, string> | undefined;
                    headerNames?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            activeCpuDurationMs?: number | undefined;
            networkTransfer?: {
                ingress: number;
                egress: number;
            } | undefined;
        };
        routes: {
            url: string;
            subdomain: string;
            port: number;
        }[];
    }>>;
    createSandbox(params: WithPrivate<{
        ports?: number[];
        projectId: string;
        source?: {
            type: "git";
            url: string;
            depth?: number;
            revision?: string;
            username?: string;
            password?: string;
        } | {
            type: "tarball";
            url: string;
        } | {
            type: "snapshot";
            snapshotId: string;
        };
        timeout?: number;
        resources?: {
            vcpus: number;
        };
        runtime?: RUNTIMES | (string & {});
        networkPolicy?: NetworkPolicy;
        env?: Record<string, string>;
        signal?: AbortSignal;
    }>): Promise<Parsed<{
        sandbox: {
            id: string;
            memory: number;
            vcpus: number;
            region: string;
            runtime: string;
            timeout: number;
            status: "aborted" | "pending" | "running" | "stopping" | "stopped" | "failed" | "snapshotting";
            requestedAt: number;
            createdAt: number;
            cwd: string;
            updatedAt: number;
            startedAt?: number | undefined;
            requestedStopAt?: number | undefined;
            stoppedAt?: number | undefined;
            abortedAt?: number | undefined;
            duration?: number | undefined;
            sourceSnapshotId?: string | undefined;
            snapshottedAt?: number | undefined;
            interactivePort?: number | undefined;
            networkPolicy?: {
                [x: string]: unknown;
                mode: "allow-all";
            } | {
                [x: string]: unknown;
                mode: "deny-all";
            } | {
                [x: string]: unknown;
                mode: "custom";
                allowedDomains?: string[] | undefined;
                allowedCIDRs?: string[] | undefined;
                deniedCIDRs?: string[] | undefined;
                injectionRules?: {
                    domain: string;
                    headers?: Record<string, string> | undefined;
                    headerNames?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            activeCpuDurationMs?: number | undefined;
            networkTransfer?: {
                ingress: number;
                egress: number;
            } | undefined;
        };
        routes: {
            url: string;
            subdomain: string;
            port: number;
        }[];
    }>>;
    runCommand(params: {
        sandboxId: string;
        cwd?: string;
        command: string;
        args: string[];
        env: Record<string, string>;
        sudo: boolean;
        wait: true;
        signal?: AbortSignal;
    }): Promise<{
        command: CommandData;
        finished: Promise<CommandFinishedData>;
    }>;
    runCommand(params: {
        sandboxId: string;
        cwd?: string;
        command: string;
        args: string[];
        env: Record<string, string>;
        sudo: boolean;
        wait?: false;
        signal?: AbortSignal;
    }): Promise<Parsed<z.infer<typeof CommandResponse>>>;
    getCommand(params: {
        sandboxId: string;
        cmdId: string;
        wait: true;
        signal?: AbortSignal;
    }): Promise<Parsed<z.infer<typeof CommandFinishedResponse>>>;
    getCommand(params: {
        sandboxId: string;
        cmdId: string;
        wait?: boolean;
        signal?: AbortSignal;
    }): Promise<Parsed<z.infer<typeof CommandResponse>>>;
    mkDir(params: {
        sandboxId: string;
        path: string;
        cwd?: string;
        signal?: AbortSignal;
    }): Promise<Parsed<Record<string, never>>>;
    getFileWriter(params: {
        sandboxId: string;
        extractDir: string;
        signal?: AbortSignal;
    }): {
        response: Promise<Response>;
        writer: FileWriter;
    };
    listSandboxes(params: {
        /**
         * The ID or name of the project to which the sandboxes belong.
         * @example "my-project"
         */
        projectId: string;
        /**
         * Maximum number of sandboxes to list from a request.
         * @example 10
         */
        limit?: number;
        /**
         * Get sandboxes created after this JavaScript timestamp.
         * @example 1540095775941
         */
        since?: number | Date;
        /**
         * Get sandboxes created before this JavaScript timestamp.
         * @example 1540095775951
         */
        until?: number | Date;
        signal?: AbortSignal;
    }): Promise<Parsed<{
        sandboxes: {
            id: string;
            memory: number;
            vcpus: number;
            region: string;
            runtime: string;
            timeout: number;
            status: "aborted" | "pending" | "running" | "stopping" | "stopped" | "failed" | "snapshotting";
            requestedAt: number;
            createdAt: number;
            cwd: string;
            updatedAt: number;
            startedAt?: number | undefined;
            requestedStopAt?: number | undefined;
            stoppedAt?: number | undefined;
            abortedAt?: number | undefined;
            duration?: number | undefined;
            sourceSnapshotId?: string | undefined;
            snapshottedAt?: number | undefined;
            interactivePort?: number | undefined;
            networkPolicy?: {
                [x: string]: unknown;
                mode: "allow-all";
            } | {
                [x: string]: unknown;
                mode: "deny-all";
            } | {
                [x: string]: unknown;
                mode: "custom";
                allowedDomains?: string[] | undefined;
                allowedCIDRs?: string[] | undefined;
                deniedCIDRs?: string[] | undefined;
                injectionRules?: {
                    domain: string;
                    headers?: Record<string, string> | undefined;
                    headerNames?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            activeCpuDurationMs?: number | undefined;
            networkTransfer?: {
                ingress: number;
                egress: number;
            } | undefined;
        }[];
        pagination: {
            count: number;
            next: number | null;
            prev: number | null;
        };
    }>>;
    listSnapshots(params: {
        /**
         * The ID or name of the project to which the snapshots belong.
         * @example "my-project"
         */
        projectId: string;
        /**
         * Maximum number of snapshots to list from a request.
         * @example 10
         */
        limit?: number;
        /**
         * Get snapshots created after this JavaScript timestamp.
         * @example 1540095775941
         */
        since?: number | Date;
        /**
         * Get snapshots created before this JavaScript timestamp.
         * @example 1540095775951
         */
        until?: number | Date;
        signal?: AbortSignal;
    }): Promise<Parsed<{
        snapshots: {
            id: string;
            sourceSandboxId: string;
            region: string;
            status: "failed" | "created" | "deleted";
            sizeBytes: number;
            createdAt: number;
            updatedAt: number;
            expiresAt?: number | undefined;
        }[];
        pagination: {
            count: number;
            next: number | null;
            prev: number | null;
        };
    }>>;
    writeFiles(params: {
        sandboxId: string;
        cwd: string;
        files: {
            path: string;
            content: Buffer;
        }[];
        extractDir: string;
        signal?: AbortSignal;
    }): Promise<void>;
    readFile(params: {
        sandboxId: string;
        path: string;
        cwd?: string;
        signal?: AbortSignal;
    }): Promise<Readable | null>;
    killCommand(params: {
        sandboxId: string;
        commandId: string;
        signal: number;
        abortSignal?: AbortSignal;
    }): Promise<Parsed<{
        command: {
            id: string;
            name: string;
            args: string[];
            cwd: string;
            sandboxId: string;
            exitCode: number | null;
            startedAt: number;
        };
    }>>;
    getLogs(params: {
        sandboxId: string;
        cmdId: string;
        signal?: AbortSignal;
    }): AsyncGenerator<z.infer<typeof LogLineStdout> | z.infer<typeof LogLineStderr>, void, void> & Disposable & {
        close(): void;
    };
    stopSandbox(params: {
        sandboxId: string;
        signal?: AbortSignal;
        blocking?: boolean;
    }): Promise<Parsed<z.infer<typeof SandboxResponse>>>;
    updateNetworkPolicy(params: {
        sandboxId: string;
        networkPolicy: NetworkPolicy;
        signal?: AbortSignal;
    }): Promise<Parsed<z.infer<typeof UpdateNetworkPolicyResponse>>>;
    extendTimeout(params: {
        sandboxId: string;
        duration: number;
        signal?: AbortSignal;
    }): Promise<Parsed<z.infer<typeof ExtendTimeoutResponse>>>;
    createSnapshot(params: {
        sandboxId: string;
        expiration?: number;
        signal?: AbortSignal;
    }): Promise<Parsed<z.infer<typeof CreateSnapshotResponse>>>;
    deleteSnapshot(params: {
        snapshotId: string;
        signal?: AbortSignal;
    }): Promise<Parsed<z.infer<typeof SnapshotResponse>>>;
    getSnapshot(params: {
        snapshotId: string;
        signal?: AbortSignal;
    }): Promise<Parsed<z.infer<typeof SnapshotResponse>>>;
}
