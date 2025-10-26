# Nested Search Implementation for Sales

## Overview
I've implemented nested search functionality for the Sales GraphQL API. You can now search for sales records using nested conditions on related entities like product, subcategory, and product category.

## Input Types Created

### 1. WhereProductCategorySearchInput
```graphql
input WhereProductCategorySearchInput {
  id: Int
  name: String
}
```

### 2. WhereProductSubcategorySearchInput
```graphql
input WhereProductSubcategorySearchInput {
  id: Int
  name: String
  product_category_id: Int
  product_category: WhereProductCategorySearchInput
}
```

### 3. WhereProductSearchInput
```graphql
input WhereProductSearchInput {
  id: Int
  name: String
  subcategory_id: Int
  company_id: Int
  subcategory: WhereProductSubcategorySearchInput
}
```

### 4. Updated WhereSalesSearchInput
```graphql
input WhereSalesSearchInput {
  id: String
  product_id: Int
  product: WhereProductSearchInput  # Now supports nested search
  dealer_id: Int
  company_id: Int
  customer_id: Int
  warranty_till: Int
  sale_date: DateTime
  # ... other fields
}
```

## Example Usage

### Basic Search (as before)
```graphql
query GetPaginatedSales(
  $searchPaginationInput: SearchPaginationInput!
  $whereSearchInput: WhereSalesSearchInput!
) {
  getPaginatedSales(
    searchPaginationInput: $searchPaginationInput
    whereSearchInput: $whereSearchInput
  ) {
    skip
    take
    total
    data {
      id
      sale_date
      warranty_till
      product {
        name
        id
        subcategory {
          name
          product_category {
            name
          }
        }
      }
    }
  }
}
```

### Variables - Simple Search
```json
{
  "searchPaginationInput": {
    "skip": 0,
    "take": 10
  },
  "whereSearchInput": {
    "dealer_id": 6
  }
}
```

### Variables - Nested Search (New Feature)
```json
{
  "searchPaginationInput": {
    "skip": 0,
    "take": 10
  },
  "whereSearchInput": {
    "dealer_id": 6,
    "product": {
      "id": 1
    }
  }
}
```

### Variables - Deep Nested Search
```json
{
  "searchPaginationInput": {
    "skip": 0,
    "take": 10
  },
  "whereSearchInput": {
    "dealer_id": 6,
    "product": {
      "subcategory": {
        "product_category": {
          "name": "Electronics"
        }
      }
    }
  }
}
```

### Variables - Complex Nested Search
```json
{
  "searchPaginationInput": {
    "skip": 0,
    "take": 10
  },
  "whereSearchInput": {
    "dealer_id": 6,
    "product": {
      "name": "iPhone",
      "subcategory": {
        "id": 3,
        "product_category": {
          "name": "Electronics"
        }
      }
    }
  }
}
```

## Technical Implementation

### Base Service Changes
- Added `processWhereSearchInput` method that recursively processes nested objects
- Updated `getPaginated`, `search`, and `getAll` methods to use nested search processing
- Handles Date objects properly (doesn't treat them as nested objects)

### Key Features
1. **Recursive Processing**: Automatically handles any level of nesting
2. **Type Safety**: Proper GraphQL input types for all nested levels
3. **Prisma Compatibility**: Generates Prisma-compatible where conditions
4. **Backward Compatibility**: All existing queries continue to work

## Error Resolution
The original error "Cannot determine a GraphQL input type ("Product")" was caused by trying to use entity types as input types. This has been fixed by creating proper `@InputType()` decorated classes for all nested search inputs.

## Testing
You can now test the nested search functionality with any combination of:
- Direct field searches (id, name, etc.)
- Single-level nested searches (product.id)
- Multi-level nested searches (product.subcategory.product_category.name)
- Combined searches (multiple conditions at different levels)