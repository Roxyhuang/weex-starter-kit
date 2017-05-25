//
//  ViewController.m
//  WeexExample
//
//  Created by yangyang on 2017/5/25.
//  Copyright © 2017年 Yown( https://github.com/yownyang ). All rights reserved.
//

#import "ViewController.h"

#import "WEDefine.h"
#import <WeexSDK/WeexSDK.h>

@interface ViewController ()

@property (nonatomic) WXSDKInstance *instance_;
@property (nonatomic) UIView *weexView_;

@end

@implementation ViewController

// 将其IP地址设为你本机地址
static NSString *const WEIP = @"http://192.168.3.132:8080";

- (void)viewDidLoad {
    
    [super viewDidLoad];
    
    NSString *str = [WEIP stringByAppendingString:@"/dist/home.weex.js"];
    NSURL *url = [NSURL URLWithString:str];
    [self weexRenderWithURL:url];
}

- (void)weexRenderWithURL:(NSURL *)url {
    
    // 防止上一个未移除
    [self.instance_ destroyInstance];
    
    self.instance_ = [[WXSDKInstance alloc] init];
    self.instance_.viewController = self;
    self.instance_.frame = CGRectMake(0, 0, WEScreenWidth, WEScreenHeight);
    
    @weakify;
    self.instance_.onCreate = ^(UIView *view) {
        @strongify;
        [self.weexView_ removeFromSuperview];
        self.weexView_ = view;
        [self.view addSubview:self.weexView_];
    };
    
    self.instance_.onFailed = ^(NSError *error) {
        
        NSLog(@"Failed");
    };
    
    self.instance_.renderFinish = ^(UIView *view) {
        
        NSLog(@"RenderFinish");
    };
    
    self.instance_.updateFinish = ^(UIView *view) {
        
        NSLog(@"UpdateFinish");
    };
    
    [self.instance_ renderWithURL:url];
}

@end
