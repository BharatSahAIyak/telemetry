## Next Steps

1. Data ingestion, distribution, and lifetime, Archival/Cold Storage. ![](./assets/database-tiers.svg)
2. Jaegar Traces - [DMP Project](https://github.com/BharatSahAIyak/telemetry/issues/8)
3. Sampling 
    - To constrain the amount of data, Scuba allows rows to specify an optional sample rate, which indicates that Scuba contains only a fraction (often 1 in 100 to 1 in 1,000,000) of the original events.
4. Posthog Client SDK Adapter
    - Creating a custom posthogs adapter, to modify event body according to out specification.
5. Cold Storage API Support - [DuckDB](https://duckdb.org/)
    - DuckDB can help querying data stored in cold storage.
6. Speeding up query execution - Trino, [Presto](https://prestodb.io/), Caching Layer for Frequent Queries
    - With multiple data layers, there will sometimes be need to query data from different levels, this is where Presto querying engine can help. This follows lakehouse architecture.

References
1. [Scuba: Diving into Data at Facebook](https://scontent.fdel41-1.fna.fbcdn.net/v/t39.8562-6/240863722_253810736457098_6101326039629458150_n.pdf?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=aCMIZ4CE998Ab60sOf_&_nc_ht=scontent.fdel41-1.fna&oh=00_AfDTZTjm21_DKBuMbagTmdDlJqnr0xtY14B4GcYDGSq7rg&oe=662F8650)
2. [Wide Events](https://isburmistrov.substack.com/p/all-you-need-is-wide-events-not-metrics)