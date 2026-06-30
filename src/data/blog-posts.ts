/* ─── Shared blog post data ─────────────────────────────── */

export interface BlogPost {
  slug: string;
  tag: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  img: string;
  body: string; // markdown-lite — paragraphs separated by \n\n
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "self-healing-automation-pipeline",
    tag: "AI AGENTS",
    date: "6/24/26",
    readTime: "6 min read",
    title: "HOW WE BUILT A SELF-HEALING AUTOMATION PIPELINE",
    excerpt:
      "A behind-the-scenes look at designing agents that detect, diagnose, and recover from failures without human intervention.",
    img: "/blog_featured.png",
    body: `Most automation pipelines are brittle by design. A single unexpected API response, a schema change, or a network blip sends the whole thing off the rails — and someone gets paged at 2 AM.

We wanted to build differently. Instead of wrapping every step in a try-catch and calling it a day, we architected a pipeline where the agents themselves are responsible for observing their own health, diagnosing failure modes, and deciding whether to retry, reroute, or escalate.

The core insight is simple: treat your pipeline as a living system, not a script. Each agent node publishes a structured health signal after every run. A lightweight supervisor agent subscribes to these signals and applies a decision tree — retry with backoff, swap to a fallback path, or page a human only when truly necessary.

The result? Our internal pipelines now recover from roughly 85% of transient failures automatically. Human intervention is reserved for genuine edge cases, not routine hiccups. Mean time to recovery dropped from 40 minutes to under 90 seconds.

The hardest part wasn't the code — it was defining what "failure" actually means for each step. That clarity exercise alone made the whole system more robust, regardless of the self-healing layer on top.`,
  },
  {
    slug: "when-not-to-automate",
    tag: "STRATEGY",
    date: "6/18/26",
    readTime: "4 min read",
    title: "WHEN NOT TO AUTOMATE: A FRAMEWORK FOR SMART DECISIONS",
    excerpt:
      "Not every workflow needs an agent. We break down the decision matrix we use before writing a single line of automation code.",
    img: "/blog_post1.png",
    body: `There's a trap that every automation-focused team falls into: you get good at building systems, so everything starts looking like a system that needs to be built.

We've learned to ask four questions before touching the keyboard. First — how often does this process run? A workflow that happens twice a year almost never justifies the engineering investment. Second — how stable is the underlying process? If the business logic changes every quarter, you're not automating work; you're creating maintenance debt.

Third — what's the cost of a mistake? High-stakes decisions (hiring, pricing, legal) warrant human judgment even when they're technically automatable. Fourth — does a human doing this task generate relationship value? Some "inefficient" processes are actually trust-building moments in disguise.

Run through these four questions honestly and you'll find that roughly a third of the workflows on your backlog shouldn't be automated at all. That's not a failure — it's clarity. Save your engineering cycles for the workflows where automation compounds over time.

The best automation strategy is a selective one. The teams we've seen fail are the ones who automate everything they can, rather than everything they should.`,
  },
  {
    slug: "cutting-reporting-time-80-percent",
    tag: "CASE STUDY",
    date: "6/10/26",
    readTime: "8 min read",
    title: "CUTTING REPORTING TIME BY 80% FOR A SAAS STARTUP",
    excerpt:
      "How a custom data pipeline and LLM-powered summariser replaced four hours of weekly manual reporting for a 12-person team.",
    img: "/blog_post2.png",
    body: `The team was spending four hours every Friday pulling numbers from five different tools, pasting them into a Notion template, and writing a paragraph summary for their weekly investor update. Twelve people. Every week. Multiplied across a year, that's over 2,500 person-hours lost to copying and pasting.

The fix wasn't a BI dashboard — they already had one, and nobody read it. What they needed was a narrative, not a table. So we built a pipeline that pulls the raw metrics automatically, feeds them to an LLM with a structured prompt that knows the company's goals, KPIs, and reporting voice, and outputs a draft update in the exact format their investors expect.

The pipeline runs every Friday morning. By the time the team arrives, the draft is sitting in their Slack channel. They spend fifteen minutes reviewing and tweaking, then send it. Total time: from four hours to twenty minutes.

The interesting technical challenge was handling metric drift — months where a number goes up for a good reason vs. a bad reason look identical to the model. We solved this by giving the LLM a structured "context feed" alongside the raw numbers: current quarter goal, last week's note from the CEO, and any flags the team manually sets. The result is summaries that are contextually accurate, not just numerically accurate.

Cost to run: under $3 per week in API calls.`,
  },
  {
    slug: "rag-vs-fine-tuning",
    tag: "ENGINEERING",
    date: "6/3/26",
    readTime: "7 min read",
    title: "RAG VS FINE-TUNING: PICKING THE RIGHT TOOL FOR THE JOB",
    excerpt:
      "We compare retrieval-augmented generation and fine-tuning across cost, latency, and maintenance — with real numbers.",
    img: "/blog_post3.png",
    body: `The debate comes up in almost every project: should we fine-tune a model on our data, or use retrieval-augmented generation? The framing is usually wrong. They solve different problems.

Fine-tuning changes how a model thinks. RAG changes what it knows. If you need the model to adopt a specific reasoning style, tone, or domain-specific heuristic, fine-tuning is the right tool. If you need it to reference up-to-date, proprietary information it wasn't trained on, RAG is almost always better.

The practical numbers from our projects: fine-tuning a 7B parameter model on a domain-specific dataset costs roughly $80–200 for the initial run, takes 4–12 hours, and needs to be redone every time your data changes significantly. RAG, by contrast, has near-zero setup cost beyond indexing, updates in real time as you add documents, and adds ~200–400ms latency per query depending on your retrieval setup.

Where fine-tuning genuinely wins: tasks where the model needs to internalize a specific output format, classification schemes, or domain jargon that's too voluminous to fit in a context window. Where RAG wins: anything involving live data, large knowledge bases, or compliance-sensitive environments where you need an audit trail of what the model was given.

Our default recommendation: start with RAG. It's faster, cheaper, and more explainable. Graduate to fine-tuning only when you've proven that retrieval quality is the bottleneck.`,
  },
  {
    slug: "hidden-cost-manual-workflows",
    tag: "OPERATIONS",
    date: "5/19/26",
    readTime: "4 min read",
    title: "THE HIDDEN COST OF MANUAL WORKFLOWS IN 2026",
    excerpt:
      "A data-backed argument for why the opportunity cost of not automating now is higher than most founders realise.",
    img: "/blog_post4.png",
    body: `The obvious cost of manual work is the time it takes. The hidden cost is everything else.

When skilled people spend time on repetitive tasks, you're not just paying for those hours — you're paying for the cognitive overhead that surrounds them. Context switching, the mental weight of remembering to do something, the anxiety of a process that could break if one person is out sick. These costs don't show up on a timesheet.

We ran a rough audit across five companies we work with. On average, knowledge workers spend 23% of their week on work that could be fully automated with existing tools. At a blended salary cost of $120k per year, that's $27,600 per person per year in automatable labor. For a 10-person team, that's $276,000 — probably more than your entire cloud infrastructure budget.

The ROI math on automation is rarely the story people tell. The story is usually "we saved 5 hours a week on this one workflow." The real story is "we freed up the cognitive bandwidth of our best people to focus on the work that actually creates value."

In 2026, the opportunity cost of not automating isn't just efficiency. It's competitive position. The teams that have already automated their operational layer are compounding — every quarter, their people are getting faster at higher-leverage work while their competitors are still copying and pasting.`,
  },
];

export const FEATURED_POST = BLOG_POSTS[0];
export const GRID_POSTS = BLOG_POSTS.slice(1);
