// Import from src/ (not the package name) so edits hot-reload without a rebuild.
import { TextField } from '../src';

export function App() {
    return (
        <main className="mx-auto flex max-w-2xl flex-col gap-8 p-8 text-brew-text">
            <h1 className="text-2xl font-bold">@brew-kit/devvit-client</h1>

            <section className="flex flex-col gap-3">
                <h2 className="text-lg font-semibold">Button</h2>
                <div className="flex flex-wrap gap-3">
                    <TextField label="Test" value="" onChange={console.log} />
                </div>
            </section>
        </main>
    );
}
