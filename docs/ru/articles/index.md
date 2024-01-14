---
pageClass: articles
---

# Наши статьи на других ресурсах

------

<div v-for="(post, i) in posts" :key="i" class="post">
    <h3 class="title">
        <a :href="post.url" target="_blank" class="vp-external-link-icon">
        {{ post.title }}
        </a>
    </h3>
    <div class="content">
        <div class="image">
            <img :src="post.imageUrl" />
        </div>
        <div class="desc" v-html="post.desc">
        </div>
    </div>
    <div class="footer">
        <div class="source">
            <a :href="post.url" target="_blank" class="vp-external-link-icon">
                {{ extractDomain(post.url) }}
            </a>
        </div>
        <div class="date">
            {{ post.date }}
        </div>
    </div>
</div>

<script setup>
    import { ref } from "vue";
    import { data as posts } from "./posts.data.js";
    const d = ref("some");

    function extractDomain(url) {
        if (!url) {
            return "";
        }
        // Remove protocol (http://, https://) if present
        const protocolIdx = url.indexOf('://');
        if (protocolIdx !== -1) {
            url = url.slice(protocolIdx + 3);
        }

        // Remove path and query parameters
        const pathIdx = url.indexOf('/');
        if (pathIdx !== -1) {
            url = url.slice(0, pathIdx);
        }

        // Split by dots and get the last two elements
        const domainParts = url.split('.').slice(-2);

        // Join the domain parts and return
        return domainParts.join('.');
    }

</script>

<style lang="scss" scoped>
    .post {
        border-bottom: 1px solid var(--vp-c-border);
        margin: 1rem 0 2rem;
        .title {
            font-size: 1.3rem;
            font-weight: 600;
            border-bottom: 1px solid var(--vp-c-divider);
            margin: 3rem 0 1rem;
            padding-bottom: 1rem;
            a {
                text-decoration: none;
                color: var(--vp-c-text-2);
                transition: color 0.3s easy-out;
                &:hover {
                    color: var(--vp-c-text-1);
                }
            }
        }
        .content {
            display: flex;
            .image {
                flex: 1 1 30%;
                margin: 0 1rem 1rem 0;
            }
            .desc {
                flex: 1 1 70%;
            }
            @media (max-width: 768px) {
                & {
                    flex-direction: column;
                }
            }

        }
        .footer {
            display: flex;
            justify-content: space-between;
            padding: 2rem 0 0.5rem;
            color: var(--vp-c-text-3);
            a {
                color: var(--vp-c-text-3);
            }
        }

    }

</style>
