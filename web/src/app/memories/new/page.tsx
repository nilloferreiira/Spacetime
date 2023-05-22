import { NewMemoryForm } from '@/components/NewMemoryForm'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewMemorie() {
  return (
    <div className="ml-16 mr-16 mt-16 flex flex-1 flex-col gap-4">
      <Link
        href="/"
        className="text-sm flex items-center gap-1 text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        Voltar a timeline
      </Link>

      <NewMemoryForm />
    </div>
  )
}
