### Shared logic between `desktop-web` & `mobile-app`  
---   

This folder will contain **no DOM or React specific code - only vanilla JS**
Its purpose is to allow **code reuse** across both frontend platforms.

#### Shared folder     
- **Test** - Jest will handle web/app testing in `utils` and `validation`
- **API** - Reusable API caller for React/RN fetch wrappers, not express backend
- **Constants** - 
- **Utils** - 
- **Validation** - 


```
shared/
├── __tests__/    # Unit tests for utilities/validation
├── api/          # Reusable Frontend logic for fetch wrappers 
├── constants/    # Shared static values (roles, enums)
├── utils/        # Generic helper functions
├── validation/   # Input/data validation schemas
```
