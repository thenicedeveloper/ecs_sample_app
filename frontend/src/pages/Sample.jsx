import { useEffect, useState } from "react"

export default function Sample() {
  const [info, setInfo] = useState(null)

  useEffect(() => {
    fetch("/api/sample/container-info")
      .then(res => res.json())
      .then(data => setInfo(data))
      .catch(() => setInfo(null))
  }, [])

  if (!info) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Sample ECS Container Test</h1>
        <p>Loading container info…</p>
      </div>
    )
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Sample ECS Container Test</h1>

      <p className="mb-4">
        <strong>Environment:</strong> {info.environment}
      </p>

      <div className="space-y-4">
        {info.containers.map((c, i) => (
          <div key={i} className="bg-gray-100 p-4 rounded shadow">
            <p><strong>Name:</strong> {c.name}</p>
            <p><strong>Container ID:</strong> {c.container_id}</p>
            <p><strong>Container IP:</strong> {c.container_ip}</p>
          </div>
        ))}
      </div>
    </div>
  )
}