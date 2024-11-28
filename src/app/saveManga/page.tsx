// app/saveManga/[id]/page.tsx

export default async function SaveMangaPage({ params }: { params: { mangaId: string } }) {

    await params;
    console.log(params)

    // Agora você pode acessar o 'id' de forma segura
    const { mangaId } = params;

    return (
        <div>
            <h1>Manga com ID: {mangaId}</h1>
            {/* Renderize as informações baseadas no 'id' */}
        </div>
    );
}
