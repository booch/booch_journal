<script lang="ts">
    interface Journal {
        name: string;
        entries: JournalEntry[];
    }
    interface JournalEntry {
        title: string;
        type: string;
        created_at: Date;
        updated_at: Date;
        content: string;
        tags: string[];
    }

    export let journals : Journal[];
    let journal = journals[0];
</script>


<main>
    <h1>{journal.name}</h1>
    <nav id="actions">
        <ul>
            <li>+</li>
            <li>🔍</li>
        </ul>
    </nav>
    <section class="entries">
        <ol>
            {#each journal.entries as entry}
                <li class="entry"><a href="">{entry.title}</a></li>
            {/each}
        </ol>
    </section>
</main>


<style>
    main {
        text-align: center;
        max-width: 240px;
        margin: 0 auto;
    }
    nav#actions ul li {
        display: inline;
        padding: 0.2em;
    }
    .entry {
        list-style-type: none;
        padding: 0.5em;
    }
    ul, ol {
        padding: 0;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
