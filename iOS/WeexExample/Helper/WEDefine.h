//
//  WEDefine.h
//  WeexExample
//
//  Created by yangyang on 2017/5/25.
//  Copyright © 2017年 Yown( https://github.com/yownyang ). All rights reserved.
//

#ifndef WEDefine_h
#define WEDefine_h

#pragma mark - Code Snippet - Strong/Weak

#define weakify autoreleasepool{} __weak __typeof__(self) weakSelf = self;
#define strongify try{} @finally{} __typeof__(weakSelf) self = weakSelf;

#pragma mark - Code Snippet - Shortcut

#define WEScreenWidth ([UIScreen mainScreen].bounds.size.width)
#define WEScreenHeight ([UIScreen mainScreen].bounds.size.height)

#endif /* WEDefine_h */
