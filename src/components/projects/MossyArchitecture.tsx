import {
    Background,
    BaseEdge,
    Controls,
    EdgeLabelRenderer,
    getSmoothStepPath,
    Handle,
    Position,
    ReactFlow,
} from '@xyflow/react'
import type { Edge, EdgeProps, Node, NodeProps } from '@xyflow/react'

type ArchitectureNode = Node<
    { label: string; kind: 'client' | 'backend' | 'vault' },
    'architecture'
>

function ArchitectureNodeView({ data }: NodeProps<ArchitectureNode>) {
    const isBackend = data.kind === 'backend'
    const hasInput = isBackend || data.kind === 'vault'

    return (
        <div
            className={`flex min-h-16 items-center justify-center gap-3 rounded-md border border-border bg-surface px-5 py-4 text-sm font-medium text-primary-text ${isBackend ? 'w-60' : 'w-44'}`}
        >
            <Handle
                type={hasInput ? 'target' : 'source'}
                position={hasInput ? Position.Left : Position.Right}
                isConnectable={false}
                className="size-2 border-border bg-muted-text"
            />

            {isBackend && (
                <Handle
                    type="source"
                    position={Position.Right}
                    isConnectable={false}
                    className="size-2 border-border bg-muted-text"
                />
            )}
            {isBackend && (
                <img
                    src={`${import.meta.env.BASE_URL}mossy-creature.webp`}
                    alt=""
                    width={48}
                    height={48}
                    className="size-12 shrink-0 grayscale brightness-150"
                />
            )}
            <span>{data.label}</span>
        </div>
    )
}

const nodeTypes = { architecture: ArchitectureNodeView }

function ArchitectureEdgeView({ id, label, style, ...props }: EdgeProps) {
    const [path, labelX, labelY] = getSmoothStepPath(props)

    return (
        <>
            <BaseEdge id={id} path={path} style={style} />
            <EdgeLabelRenderer>
                <div
                    className="pointer-events-none absolute w-44 rounded bg-background px-2 py-1 text-center text-xs leading-snug text-secondary-text"
                    style={{
                        transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
                    }}
                >
                    {label}
                </div>
            </EdgeLabelRenderer>
        </>
    )
}

const edgeTypes = { architecture: ArchitectureEdgeView }

const nodes: ArchitectureNode[] = [
    {
        id: 'frontend',
        type: 'architecture',
        position: { x: 0, y: 0 },
        data: { label: 'Frontend', kind: 'client' },
    },
    {
        id: 'web-extension',
        type: 'architecture',
        position: { x: 0, y: 160 },
        data: { label: 'Web Extension', kind: 'client' },
    },
    {
        id: 'vault',
        type: 'architecture',
        position: { x: 896, y: 80 },
        data: { label: 'Vault', kind: 'vault' },
    },
    {
        id: 'backend',
        type: 'architecture',
        position: { x: 432, y: 72 },
        data: { label: "Mossy's backend", kind: 'backend' },
    },
]

const edges: Edge[] = [
    {
        id: 'frontend-backend',
        source: 'frontend',
        target: 'backend',
        label: 'key-sync and password access',
    },
    {
        id: 'web-extension-backend',
        source: 'web-extension',
        target: 'backend',
        label: 'key-sync and password access',
    },
    {
        id: 'backend-vault',
        source: 'backend',
        target: 'vault',
        label: 'real-time communication over STOMP (relay)',
    },
].map((edge) => ({
    ...edge,
    type: 'architecture',
    style: { stroke: 'var(--color-muted-text)', strokeWidth: 1.5 },
}))

export default function MossyArchitecture() {
    return (
        <figure aria-label="Mossy architecture">
            <figcaption className="sr-only">
                frontend and web extension connect to mossy's backend, which
                provides key-sync and password access. The backend connects to
                vault using real-time communication over STOMP as a relay.
            </figcaption>
            <div className="h-96 w-full overflow-hidden rounded-md border border-border sm:h-104">
                <ReactFlow
                    defaultNodes={nodes}
                    defaultEdges={edges}
                    nodeTypes={nodeTypes}
                    edgeTypes={edgeTypes}
                    colorMode="dark"
                    className="bg-background"
                    fitView
                    fitViewOptions={{ padding: 0.1, maxZoom: 1 }}
                    minZoom={0.2}
                    maxZoom={2}
                    nodesDraggable={false}
                    nodesConnectable={false}
                    edgesReconnectable={false}
                    elementsSelectable={false}
                    deleteKeyCode={null}
                    zoomOnScroll={false}
                    preventScrolling={false}
                >
                    <Background color="var(--color-border)" gap={24} size={1} />
                    <Controls showInteractive={false} />
                </ReactFlow>
            </div>
        </figure>
    )
}
