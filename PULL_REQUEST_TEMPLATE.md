# Fix Blog Post Title Propagation

## Description
Resolves issue where blog post titles weren't appearing in browser tabs due to data structure mismatch between Tina CMS and Astro components.

**Changes:**
- Properly mapped Tina CMS response to BlogPost props
- Added type-safe fallbacks for optional fields
- Converted date strings to Date objects
- Explicitly passed required tinaInfo structure

## Testing Instructions
1. Create a new blog post via Tina CMS
2. Navigate to the blog post page
3. Verify browser tab shows correct title
4. Check console for TypeScript errors

## Notes
- Uses default placeholder image when none provided
- Fallback title/description prevent empty metadata
- Date conversion handles null/undefined values