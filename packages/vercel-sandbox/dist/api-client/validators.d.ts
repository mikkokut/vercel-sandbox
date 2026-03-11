import { z } from "zod";
export type SandboxMetaData = z.infer<typeof Sandbox>;
export declare const InjectionRuleValidator: z.ZodObject<{
    domain: z.ZodString;
    headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    headerNames: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export declare const NetworkPolicyValidator: z.ZodUnion<readonly [z.ZodObject<{
    mode: z.ZodLiteral<"allow-all">;
}, z.core.$loose>, z.ZodObject<{
    mode: z.ZodLiteral<"deny-all">;
}, z.core.$loose>, z.ZodObject<{
    mode: z.ZodLiteral<"custom">;
    allowedDomains: z.ZodOptional<z.ZodArray<z.ZodString>>;
    allowedCIDRs: z.ZodOptional<z.ZodArray<z.ZodString>>;
    deniedCIDRs: z.ZodOptional<z.ZodArray<z.ZodString>>;
    injectionRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
        domain: z.ZodString;
        headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        headerNames: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>>;
}, z.core.$loose>]>;
export declare const Sandbox: z.ZodObject<{
    id: z.ZodString;
    memory: z.ZodNumber;
    vcpus: z.ZodNumber;
    region: z.ZodString;
    runtime: z.ZodString;
    timeout: z.ZodNumber;
    status: z.ZodEnum<{
        aborted: "aborted";
        pending: "pending";
        running: "running";
        stopping: "stopping";
        stopped: "stopped";
        failed: "failed";
        snapshotting: "snapshotting";
    }>;
    requestedAt: z.ZodNumber;
    startedAt: z.ZodOptional<z.ZodNumber>;
    requestedStopAt: z.ZodOptional<z.ZodNumber>;
    stoppedAt: z.ZodOptional<z.ZodNumber>;
    abortedAt: z.ZodOptional<z.ZodNumber>;
    duration: z.ZodOptional<z.ZodNumber>;
    sourceSnapshotId: z.ZodOptional<z.ZodString>;
    snapshottedAt: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodNumber;
    cwd: z.ZodString;
    updatedAt: z.ZodNumber;
    interactivePort: z.ZodOptional<z.ZodNumber>;
    networkPolicy: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        mode: z.ZodLiteral<"allow-all">;
    }, z.core.$loose>, z.ZodObject<{
        mode: z.ZodLiteral<"deny-all">;
    }, z.core.$loose>, z.ZodObject<{
        mode: z.ZodLiteral<"custom">;
        allowedDomains: z.ZodOptional<z.ZodArray<z.ZodString>>;
        allowedCIDRs: z.ZodOptional<z.ZodArray<z.ZodString>>;
        deniedCIDRs: z.ZodOptional<z.ZodArray<z.ZodString>>;
        injectionRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            domain: z.ZodString;
            headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            headerNames: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>>;
    }, z.core.$loose>]>>;
    activeCpuDurationMs: z.ZodOptional<z.ZodNumber>;
    networkTransfer: z.ZodOptional<z.ZodObject<{
        ingress: z.ZodNumber;
        egress: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SandboxRouteData = z.infer<typeof SandboxRoute>;
export declare const SandboxRoute: z.ZodObject<{
    url: z.ZodString;
    subdomain: z.ZodString;
    port: z.ZodNumber;
}, z.core.$strip>;
export type SnapshotMetadata = z.infer<typeof Snapshot>;
export declare const Snapshot: z.ZodObject<{
    id: z.ZodString;
    sourceSandboxId: z.ZodString;
    region: z.ZodString;
    status: z.ZodEnum<{
        failed: "failed";
        created: "created";
        deleted: "deleted";
    }>;
    sizeBytes: z.ZodNumber;
    expiresAt: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodNumber;
    updatedAt: z.ZodNumber;
}, z.core.$strip>;
export declare const Pagination: z.ZodObject<{
    count: z.ZodNumber;
    next: z.ZodNullable<z.ZodNumber>;
    prev: z.ZodNullable<z.ZodNumber>;
}, z.core.$strip>;
export type CommandData = z.infer<typeof Command>;
export declare const Command: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    args: z.ZodArray<z.ZodString>;
    cwd: z.ZodString;
    sandboxId: z.ZodString;
    exitCode: z.ZodNullable<z.ZodNumber>;
    startedAt: z.ZodNumber;
}, z.core.$strip>;
export declare const SandboxResponse: z.ZodObject<{
    sandbox: z.ZodObject<{
        id: z.ZodString;
        memory: z.ZodNumber;
        vcpus: z.ZodNumber;
        region: z.ZodString;
        runtime: z.ZodString;
        timeout: z.ZodNumber;
        status: z.ZodEnum<{
            aborted: "aborted";
            pending: "pending";
            running: "running";
            stopping: "stopping";
            stopped: "stopped";
            failed: "failed";
            snapshotting: "snapshotting";
        }>;
        requestedAt: z.ZodNumber;
        startedAt: z.ZodOptional<z.ZodNumber>;
        requestedStopAt: z.ZodOptional<z.ZodNumber>;
        stoppedAt: z.ZodOptional<z.ZodNumber>;
        abortedAt: z.ZodOptional<z.ZodNumber>;
        duration: z.ZodOptional<z.ZodNumber>;
        sourceSnapshotId: z.ZodOptional<z.ZodString>;
        snapshottedAt: z.ZodOptional<z.ZodNumber>;
        createdAt: z.ZodNumber;
        cwd: z.ZodString;
        updatedAt: z.ZodNumber;
        interactivePort: z.ZodOptional<z.ZodNumber>;
        networkPolicy: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            mode: z.ZodLiteral<"allow-all">;
        }, z.core.$loose>, z.ZodObject<{
            mode: z.ZodLiteral<"deny-all">;
        }, z.core.$loose>, z.ZodObject<{
            mode: z.ZodLiteral<"custom">;
            allowedDomains: z.ZodOptional<z.ZodArray<z.ZodString>>;
            allowedCIDRs: z.ZodOptional<z.ZodArray<z.ZodString>>;
            deniedCIDRs: z.ZodOptional<z.ZodArray<z.ZodString>>;
            injectionRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
                headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                headerNames: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>>>;
        }, z.core.$loose>]>>;
        activeCpuDurationMs: z.ZodOptional<z.ZodNumber>;
        networkTransfer: z.ZodOptional<z.ZodObject<{
            ingress: z.ZodNumber;
            egress: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const SandboxAndRoutesResponse: z.ZodObject<{
    sandbox: z.ZodObject<{
        id: z.ZodString;
        memory: z.ZodNumber;
        vcpus: z.ZodNumber;
        region: z.ZodString;
        runtime: z.ZodString;
        timeout: z.ZodNumber;
        status: z.ZodEnum<{
            aborted: "aborted";
            pending: "pending";
            running: "running";
            stopping: "stopping";
            stopped: "stopped";
            failed: "failed";
            snapshotting: "snapshotting";
        }>;
        requestedAt: z.ZodNumber;
        startedAt: z.ZodOptional<z.ZodNumber>;
        requestedStopAt: z.ZodOptional<z.ZodNumber>;
        stoppedAt: z.ZodOptional<z.ZodNumber>;
        abortedAt: z.ZodOptional<z.ZodNumber>;
        duration: z.ZodOptional<z.ZodNumber>;
        sourceSnapshotId: z.ZodOptional<z.ZodString>;
        snapshottedAt: z.ZodOptional<z.ZodNumber>;
        createdAt: z.ZodNumber;
        cwd: z.ZodString;
        updatedAt: z.ZodNumber;
        interactivePort: z.ZodOptional<z.ZodNumber>;
        networkPolicy: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            mode: z.ZodLiteral<"allow-all">;
        }, z.core.$loose>, z.ZodObject<{
            mode: z.ZodLiteral<"deny-all">;
        }, z.core.$loose>, z.ZodObject<{
            mode: z.ZodLiteral<"custom">;
            allowedDomains: z.ZodOptional<z.ZodArray<z.ZodString>>;
            allowedCIDRs: z.ZodOptional<z.ZodArray<z.ZodString>>;
            deniedCIDRs: z.ZodOptional<z.ZodArray<z.ZodString>>;
            injectionRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
                headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                headerNames: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>>>;
        }, z.core.$loose>]>>;
        activeCpuDurationMs: z.ZodOptional<z.ZodNumber>;
        networkTransfer: z.ZodOptional<z.ZodObject<{
            ingress: z.ZodNumber;
            egress: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    routes: z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        subdomain: z.ZodString;
        port: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const CommandResponse: z.ZodObject<{
    command: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        args: z.ZodArray<z.ZodString>;
        cwd: z.ZodString;
        sandboxId: z.ZodString;
        exitCode: z.ZodNullable<z.ZodNumber>;
        startedAt: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type CommandFinishedData = z.infer<typeof CommandFinishedResponse>["command"];
export declare const CommandFinishedResponse: z.ZodObject<{
    command: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        args: z.ZodArray<z.ZodString>;
        cwd: z.ZodString;
        sandboxId: z.ZodString;
        startedAt: z.ZodNumber;
        exitCode: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const EmptyResponse: z.ZodObject<{}, z.core.$strip>;
export declare const LogLineStdout: z.ZodObject<{
    data: z.ZodString;
    stream: z.ZodLiteral<"stdout">;
}, z.core.$strip>;
export declare const LogLineStderr: z.ZodObject<{
    data: z.ZodString;
    stream: z.ZodLiteral<"stderr">;
}, z.core.$strip>;
export declare const LogError: z.ZodObject<{
    stream: z.ZodLiteral<"error">;
    data: z.ZodObject<{
        code: z.ZodString;
        message: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const LogLine: z.ZodDiscriminatedUnion<[z.ZodObject<{
    data: z.ZodString;
    stream: z.ZodLiteral<"stdout">;
}, z.core.$strip>, z.ZodObject<{
    data: z.ZodString;
    stream: z.ZodLiteral<"stderr">;
}, z.core.$strip>, z.ZodObject<{
    stream: z.ZodLiteral<"error">;
    data: z.ZodObject<{
        code: z.ZodString;
        message: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>], "stream">;
export declare const SandboxesResponse: z.ZodObject<{
    sandboxes: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        memory: z.ZodNumber;
        vcpus: z.ZodNumber;
        region: z.ZodString;
        runtime: z.ZodString;
        timeout: z.ZodNumber;
        status: z.ZodEnum<{
            aborted: "aborted";
            pending: "pending";
            running: "running";
            stopping: "stopping";
            stopped: "stopped";
            failed: "failed";
            snapshotting: "snapshotting";
        }>;
        requestedAt: z.ZodNumber;
        startedAt: z.ZodOptional<z.ZodNumber>;
        requestedStopAt: z.ZodOptional<z.ZodNumber>;
        stoppedAt: z.ZodOptional<z.ZodNumber>;
        abortedAt: z.ZodOptional<z.ZodNumber>;
        duration: z.ZodOptional<z.ZodNumber>;
        sourceSnapshotId: z.ZodOptional<z.ZodString>;
        snapshottedAt: z.ZodOptional<z.ZodNumber>;
        createdAt: z.ZodNumber;
        cwd: z.ZodString;
        updatedAt: z.ZodNumber;
        interactivePort: z.ZodOptional<z.ZodNumber>;
        networkPolicy: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            mode: z.ZodLiteral<"allow-all">;
        }, z.core.$loose>, z.ZodObject<{
            mode: z.ZodLiteral<"deny-all">;
        }, z.core.$loose>, z.ZodObject<{
            mode: z.ZodLiteral<"custom">;
            allowedDomains: z.ZodOptional<z.ZodArray<z.ZodString>>;
            allowedCIDRs: z.ZodOptional<z.ZodArray<z.ZodString>>;
            deniedCIDRs: z.ZodOptional<z.ZodArray<z.ZodString>>;
            injectionRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
                headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                headerNames: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>>>;
        }, z.core.$loose>]>>;
        activeCpuDurationMs: z.ZodOptional<z.ZodNumber>;
        networkTransfer: z.ZodOptional<z.ZodObject<{
            ingress: z.ZodNumber;
            egress: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    pagination: z.ZodObject<{
        count: z.ZodNumber;
        next: z.ZodNullable<z.ZodNumber>;
        prev: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const SnapshotsResponse: z.ZodObject<{
    snapshots: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        sourceSandboxId: z.ZodString;
        region: z.ZodString;
        status: z.ZodEnum<{
            failed: "failed";
            created: "created";
            deleted: "deleted";
        }>;
        sizeBytes: z.ZodNumber;
        expiresAt: z.ZodOptional<z.ZodNumber>;
        createdAt: z.ZodNumber;
        updatedAt: z.ZodNumber;
    }, z.core.$strip>>;
    pagination: z.ZodObject<{
        count: z.ZodNumber;
        next: z.ZodNullable<z.ZodNumber>;
        prev: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const ExtendTimeoutResponse: z.ZodObject<{
    sandbox: z.ZodObject<{
        id: z.ZodString;
        memory: z.ZodNumber;
        vcpus: z.ZodNumber;
        region: z.ZodString;
        runtime: z.ZodString;
        timeout: z.ZodNumber;
        status: z.ZodEnum<{
            aborted: "aborted";
            pending: "pending";
            running: "running";
            stopping: "stopping";
            stopped: "stopped";
            failed: "failed";
            snapshotting: "snapshotting";
        }>;
        requestedAt: z.ZodNumber;
        startedAt: z.ZodOptional<z.ZodNumber>;
        requestedStopAt: z.ZodOptional<z.ZodNumber>;
        stoppedAt: z.ZodOptional<z.ZodNumber>;
        abortedAt: z.ZodOptional<z.ZodNumber>;
        duration: z.ZodOptional<z.ZodNumber>;
        sourceSnapshotId: z.ZodOptional<z.ZodString>;
        snapshottedAt: z.ZodOptional<z.ZodNumber>;
        createdAt: z.ZodNumber;
        cwd: z.ZodString;
        updatedAt: z.ZodNumber;
        interactivePort: z.ZodOptional<z.ZodNumber>;
        networkPolicy: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            mode: z.ZodLiteral<"allow-all">;
        }, z.core.$loose>, z.ZodObject<{
            mode: z.ZodLiteral<"deny-all">;
        }, z.core.$loose>, z.ZodObject<{
            mode: z.ZodLiteral<"custom">;
            allowedDomains: z.ZodOptional<z.ZodArray<z.ZodString>>;
            allowedCIDRs: z.ZodOptional<z.ZodArray<z.ZodString>>;
            deniedCIDRs: z.ZodOptional<z.ZodArray<z.ZodString>>;
            injectionRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
                headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                headerNames: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>>>;
        }, z.core.$loose>]>>;
        activeCpuDurationMs: z.ZodOptional<z.ZodNumber>;
        networkTransfer: z.ZodOptional<z.ZodObject<{
            ingress: z.ZodNumber;
            egress: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const UpdateNetworkPolicyResponse: z.ZodObject<{
    sandbox: z.ZodObject<{
        id: z.ZodString;
        memory: z.ZodNumber;
        vcpus: z.ZodNumber;
        region: z.ZodString;
        runtime: z.ZodString;
        timeout: z.ZodNumber;
        status: z.ZodEnum<{
            aborted: "aborted";
            pending: "pending";
            running: "running";
            stopping: "stopping";
            stopped: "stopped";
            failed: "failed";
            snapshotting: "snapshotting";
        }>;
        requestedAt: z.ZodNumber;
        startedAt: z.ZodOptional<z.ZodNumber>;
        requestedStopAt: z.ZodOptional<z.ZodNumber>;
        stoppedAt: z.ZodOptional<z.ZodNumber>;
        abortedAt: z.ZodOptional<z.ZodNumber>;
        duration: z.ZodOptional<z.ZodNumber>;
        sourceSnapshotId: z.ZodOptional<z.ZodString>;
        snapshottedAt: z.ZodOptional<z.ZodNumber>;
        createdAt: z.ZodNumber;
        cwd: z.ZodString;
        updatedAt: z.ZodNumber;
        interactivePort: z.ZodOptional<z.ZodNumber>;
        networkPolicy: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            mode: z.ZodLiteral<"allow-all">;
        }, z.core.$loose>, z.ZodObject<{
            mode: z.ZodLiteral<"deny-all">;
        }, z.core.$loose>, z.ZodObject<{
            mode: z.ZodLiteral<"custom">;
            allowedDomains: z.ZodOptional<z.ZodArray<z.ZodString>>;
            allowedCIDRs: z.ZodOptional<z.ZodArray<z.ZodString>>;
            deniedCIDRs: z.ZodOptional<z.ZodArray<z.ZodString>>;
            injectionRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
                headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                headerNames: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>>>;
        }, z.core.$loose>]>>;
        activeCpuDurationMs: z.ZodOptional<z.ZodNumber>;
        networkTransfer: z.ZodOptional<z.ZodObject<{
            ingress: z.ZodNumber;
            egress: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const CreateSnapshotResponse: z.ZodObject<{
    snapshot: z.ZodObject<{
        id: z.ZodString;
        sourceSandboxId: z.ZodString;
        region: z.ZodString;
        status: z.ZodEnum<{
            failed: "failed";
            created: "created";
            deleted: "deleted";
        }>;
        sizeBytes: z.ZodNumber;
        expiresAt: z.ZodOptional<z.ZodNumber>;
        createdAt: z.ZodNumber;
        updatedAt: z.ZodNumber;
    }, z.core.$strip>;
    sandbox: z.ZodObject<{
        id: z.ZodString;
        memory: z.ZodNumber;
        vcpus: z.ZodNumber;
        region: z.ZodString;
        runtime: z.ZodString;
        timeout: z.ZodNumber;
        status: z.ZodEnum<{
            aborted: "aborted";
            pending: "pending";
            running: "running";
            stopping: "stopping";
            stopped: "stopped";
            failed: "failed";
            snapshotting: "snapshotting";
        }>;
        requestedAt: z.ZodNumber;
        startedAt: z.ZodOptional<z.ZodNumber>;
        requestedStopAt: z.ZodOptional<z.ZodNumber>;
        stoppedAt: z.ZodOptional<z.ZodNumber>;
        abortedAt: z.ZodOptional<z.ZodNumber>;
        duration: z.ZodOptional<z.ZodNumber>;
        sourceSnapshotId: z.ZodOptional<z.ZodString>;
        snapshottedAt: z.ZodOptional<z.ZodNumber>;
        createdAt: z.ZodNumber;
        cwd: z.ZodString;
        updatedAt: z.ZodNumber;
        interactivePort: z.ZodOptional<z.ZodNumber>;
        networkPolicy: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            mode: z.ZodLiteral<"allow-all">;
        }, z.core.$loose>, z.ZodObject<{
            mode: z.ZodLiteral<"deny-all">;
        }, z.core.$loose>, z.ZodObject<{
            mode: z.ZodLiteral<"custom">;
            allowedDomains: z.ZodOptional<z.ZodArray<z.ZodString>>;
            allowedCIDRs: z.ZodOptional<z.ZodArray<z.ZodString>>;
            deniedCIDRs: z.ZodOptional<z.ZodArray<z.ZodString>>;
            injectionRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
                headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                headerNames: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>>>;
        }, z.core.$loose>]>>;
        activeCpuDurationMs: z.ZodOptional<z.ZodNumber>;
        networkTransfer: z.ZodOptional<z.ZodObject<{
            ingress: z.ZodNumber;
            egress: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const SnapshotResponse: z.ZodObject<{
    snapshot: z.ZodObject<{
        id: z.ZodString;
        sourceSandboxId: z.ZodString;
        region: z.ZodString;
        status: z.ZodEnum<{
            failed: "failed";
            created: "created";
            deleted: "deleted";
        }>;
        sizeBytes: z.ZodNumber;
        expiresAt: z.ZodOptional<z.ZodNumber>;
        createdAt: z.ZodNumber;
        updatedAt: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
